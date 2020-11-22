import { React, Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import { createUserAccount, authenticate } from '../actions/shared';

class Visitor extends Component {

  state = {
    selectedAvatarIndex: 0,
    error: ''
  }

  clearError = () => {
    this.setState({ error: ''});
  }

  choose = (code) => {
    this.setState({ selectedAvatarIndex : code });
  }

  createAccount = (username, name, pass) => {
    if (!username || !pass || !name) {
      this.setState({ error: 'All fields are required...'});
      return;
    }
    if (this.props.users[username]) {
      this.setState({ error: 'User already exists...'});
      return;
    }
    const avatar = `/avatars/avatar${this.state.selectedAvatarIndex}.png`;
    this.props.dispatch(createUserAccount(username, name, pass, avatar)).then(() => {
      this.props.history.push('/');
    });
  }

  auth = (username, pass) => {
  if (!username || !pass) {
    this.setState({ error: 'All fields are required...'});
    return;
  }
  this.props.dispatch(authenticate(username, pass)).then(() => {
      if (this.props.authToken) {
        this.props.history.push('/');
      } else {
        this.setState({ error: 'wrong password...'});
      }
    });
  }

  render() {
   const { error, selectedAvatarIndex } = this.state;
   return (
     <div>
      <Route exact path='/login'>
        <Login onAuth={this.auth} usernames={Object.keys(this.props.users)} errorMessage={error} onClear={this.clearError}/>
      </Route>
      <Route exact path='/register'>
        <Register onRegister={this.createAccount} onChoose={this.choose} selected={selectedAvatarIndex} errorMessage={error} onClear={this.clearError}/>
      </Route>
     </div>
   )
 }
}

function mapStateToProps({ authed, users }) {
  return {
    authToken: authed.token,
    users
  }
}

export default connect(mapStateToProps)(withRouter(Visitor));
