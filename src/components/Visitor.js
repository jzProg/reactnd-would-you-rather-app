import { React, Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUserAccount, authenticate } from '../actions/shared';
import Login from './Login';
import Register from './Register';
import VisitorWrapper from './VisitorWrapper';

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
      this.props.history.push('/home');
    });
  }

  auth = (username, pass) => {
  if (!username || !pass) {
    this.setState({ error: 'All fields are required...'});
    return;
  }
  this.props.dispatch(authenticate(username, pass)).then(() => {
      if (this.props.authToken) {
        this.props.history.push('/home');
      } else {
        this.setState({ error: 'wrong password...'});
      }
    });
  }

  render() {
   const { error, selectedAvatarIndex } = this.state;
   return (
     <Route path='/'>
       <VisitorWrapper component={Login}
                       path="/"
                       onAuth={this.auth}
                       usernames={Object.keys(this.props.users)}
                       errorMessage={error}
                       onClear={this.clearError}/>
       <VisitorWrapper component={Register}
                       path="/register"
                       onRegister={this.createAccount}
                       onChoose={this.choose}
                       selected={selectedAvatarIndex}
                       errorMessage={error}
                       onClear={this.clearError}/>
     </Route>
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
