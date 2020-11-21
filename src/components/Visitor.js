import { React, Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getHash } from '../utils/encryption';

class Visitor extends Component {

  state = {
    showLogin: true,
  }

  createAccount = (username, pass) => {
    let users = JSON.parse(localStorage.getItem('users') || JSON.stringify({}));
    users[username] = getHash(pass);
    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.setItem('authed', pass);
    this.props.auth(pass);
    this.props.history.push('/');
  }

  auth =  (username, pass) => {
    const users = JSON.parse(localStorage.getItem('users')  || JSON.stringify({}));
    if (JSON.stringify(users[username]) === JSON.stringify(getHash(pass))) {
      sessionStorage.setItem('authed', pass);
      this.props.auth(pass);
      this.props.history.push('/');
    }
    else console.log("auth fail");
  }

  render() {
   return (
     <div>
      <Route exact path='/login'><Login login={this.auth}/></Route>
      <Route exact path='/register'><Register register={this.createAccount}/></Route>
     </div>
   )
 }
}

export default withRouter(Visitor);
