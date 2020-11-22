import { Link } from 'react-router-dom';

function Login(props) {

 function authenticate(event) {
   event.preventDefault();
   const inputUsername = document.getElementById('username').value;
   const inputPassword = document.getElementById('password').value;
   props.onAuth(inputUsername, inputPassword);
 }

  return (
    <div>
       <h3>Sign In to access content!</h3>
       <div className="formContainer">
         <div>
           <label>username</label><br/>
           <select name="username" id="username">
             {props.usernames.map(username => <option key={username} value={username}>{username}</option>)}
           </select>
         </div>
         <div>
           <label>password</label><br/>
           <input id="password" type="password" onFocus={props.onClear}/>
         </div>
       </div>
       <span className="error">{ props.errorMessage }</span><br/>
       <button type="button"
               className="btn btn-primary"
               style={{ margin: '2%'}}
               onClick={authenticate}>
          <b>LOGIN</b>
       </button><br/>
       <h4><i>Not a member? </i><Link to={'/register'}>Register here</Link></h4>
    </div>
  )
}

export default Login;
