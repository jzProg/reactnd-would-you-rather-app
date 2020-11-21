import { withRouter } from 'react-router-dom';

function Login(props) {

 function authenticate(event) {
   event.preventDefault();
   props.login(document.getElementById('username').value, document.getElementById('password').value);
 }

 function toRegistration(event) {
   event.preventDefault();
   props.history.push('/register');
 }

  return (
    <div>
     <h3>You need to sign In to access content</h3>
     <span>username: <input id="username" type="text"/></span><br/>
     <span>password: <input id="password" type="password"/></span><br/>
     <button type="button" onClick={authenticate}>Login</button><br/>
     <span>Not a member?</span><button type="button" onClick={toRegistration}>Register here</button>
    </div>
  )
}

export default withRouter(Login);
