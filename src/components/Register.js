import { withRouter } from 'react-router-dom';

function Register(props) {

  function register(event) {
    event.preventDefault();
    props.register(document.getElementById('username').value, document.getElementById('password').value);
  }

  function toAuth(event) {
    event.preventDefault();
    props.history.push('/login')
  }

  return (
    <div>
     <h3>Be A Member</h3>
     <span>username: <input id="username" type="text"/></span><br/>
     <span>password: <input id="password" type="password"/></span><br/>
     <button type="button" onClick={register}>Register</button><br/>
     <span>Already a member?</span><button type="button" onClick={toAuth}>SignIn</button>
    </div>
  )
}

export default withRouter(Register);
