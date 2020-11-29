import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form';

class Register extends Component {

  state = {
    fields: [
      { name: 'username', type: 'text' },
      { name: 'name', type: 'text' },
      { name: 'password', type: 'password' }
    ]
  }

  register = (event) => {
    event.preventDefault();
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const inputName = document.getElementById('name').value;
    this.props.onRegister(inputUsername, inputName, inputPassword);
  }

  choose = (code) => {
    this.props.onChoose(code);
  }

  getAvatarStyle = (code) => {
    return { opacity : this.props.selected !== code ? '0.5' : '1.0', cursor: 'pointer', margin: '1%'};
  }

  render() {
   const { onClear, errorMessage } = this.props;

    return (
      <div>
         <h3>Be A Member!</h3>
         <Form fields={this.state.fields} onFocus={onClear} />
         <span className="error">{ errorMessage }</span>
         <h3>Choose your avatar</h3>
         { [...Array(4).keys()].map(num =>
           <img style={this.getAvatarStyle(num + 1)}
                onClick={() => this.choose(num + 1)}
                className="avatar"
                alt="avatar"
                src={`/avatars/avatar${num + 1}.png`}
                key={num}/>
          )}
         <br/>
         <button type="button"
                 className="btn btn-primary"
                 style={{ margin: '4%'}}
                 onClick={this.register}>
                 <b>REGISTER</b>
         </button>
         <h4><i>Already a member? </i> <Link to={'/login'}>Sign In here</Link></h4>
      </div>
    )
  }
}

export default Register;
