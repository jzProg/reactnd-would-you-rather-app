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

  function getAvatarStyle(code) {
    return { opacity : props.selected !== code ? '0.5' : '1.0', cursor: 'pointer', margin: '1%'};
  }

  return (
    <div>
       <h3>Be A Member!</h3>
       <div className="formContainer">
         <div>
           <label>username</label><br/>
           <input id="username" type="text" onFocus={props.onClear}/>
         </div>
         <div>
           <label>name</label><br/>
           <input id="name" type="text" onFocus={props.onClear}/>
         </div>
         <div>
           <label>password</label><br/>
           <input id="password" type="password" onFocus={props.onClear}/>
         </div>
       </div>
       <span className="error">{ props.errorMessage }</span>
       <h3>Choose your avatar</h3>
       { [...Array(4).keys()].map(num =>
         <img style={getAvatarStyle(num + 1)}
              onClick={() => choose(num + 1)}
              className="avatar"
              alt="avatar"
              src={`/avatars/avatar${num + 1}.png`}
              key={num}/>
        )}
       <br/>
       <button type="button"
               className="btn btn-primary"
               style={{ margin: '4%'}}
               onClick={register}>
               <b>REGISTER</b>
       </button>
       <h4><i>Already a member? </i> <Link to={'/login'}>Sign In here</Link></h4>
    </div>
  )
}

export default Register;
