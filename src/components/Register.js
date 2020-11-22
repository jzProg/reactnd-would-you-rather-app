import { withRouter, Link } from 'react-router-dom';

function Register(props) {

  function register(event) {
    event.preventDefault();
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const inputName = document.getElementById('name').value;
    props.register(inputUsername, inputName, inputPassword); // TODO avatar
  }

  return (
    <div>
     <h3>Be A Member</h3>
     <span>username: <input id="username" type="text"/></span><br/>
     <span>name: <input id="name" type="text"/></span><br/>
     <span>password: <input id="password" type="password"/></span><br/>
     <button type="button" onClick={register}>Register</button><br/>
     <span>Already a member? </span>
     <Link to={'/login'}>Sign In here</Link>
    </div>
  )
}

export default withRouter(Register);
