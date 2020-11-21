import { withRouter, Link } from 'react-router-dom';

function Login(props) {

 function authenticate(event) {
   event.preventDefault();
   props.login(document.getElementById('username').value, document.getElementById('password').value);
 }

  return (
    <div>
     <h3>You need to sign In to access content</h3>
     <span>username: <input id="username" type="text"/></span><br/>
     <span>password: <input id="password" type="password"/></span><br/>
     <button type="button" onClick={authenticate}>Login</button><br/>
     <span>Not a member? </span><Link to={'/register'}>Register here</Link>
    </div>
  )
}

export default withRouter(Login);
