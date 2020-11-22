import { Link } from 'react-router-dom';

function Register(props) {

  function register(event) {
    event.preventDefault();
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const inputName = document.getElementById('name').value;
    props.onRegister(inputUsername, inputName, inputPassword);
  }

  function choose(code) {
    props.onChoose(code);
  }

  return (
    <div>
     <h3>Be A Member</h3>
     <span>username: <input id="username" type="text"/>
     </span>
     <br/>
     <span>name: <input id="name" type="text"/>
     </span>
     <br/>
     <span>password: <input id="password" type="password"/>
     </span>
     <br/>
     <span>Choose your avatar: </span>
       { [...Array(4).keys()].map(num => <img style = {{ opacity : props.selected !== num + 1 ? '0.5' : '1', cursor: 'pointer'}} onClick={() => choose(num + 1)} className="avatar" alt="avatar" src={`/avatars/avatar${num + 1}.png`} key={num}/>) }
     <br/>
     <button type="button" onClick={register}>Register</button><br/>
     <span>Already a member? </span>
     <Link to={'/login'}>Sign In here</Link>
    </div>
  )
}

export default Register;
