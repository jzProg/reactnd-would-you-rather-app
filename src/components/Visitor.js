import { React, Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import { createUserAccount, authenticate } from '../actions/shared';

class Visitor extends Component {

  createAccount = (username, name, pass) => {
    this.props.dispatch(createUserAccount(username, name, pass)).then(() => {
      this.props.history.push('/');
    });
  }

  auth =  (username, pass) => {
  this.props.dispatch(authenticate(username, pass)).then(() => {
      if (this.props.authToken) {
        this.props.history.push('/');
      } else {
        console.log("auth fail");  // TODO change
      }
    });
  }

  render() {
   return (
     <div>
      <Route exact path='/login'>
        <Login onAuth={this.auth} usernames={Object.keys(this.props.users)}/>
      </Route>
      <Route exact path='/register'>
        <Register onRegister={this.createAccount}/>
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
