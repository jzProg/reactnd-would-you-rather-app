import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Form from '../Form';

class Login extends Component {

  state = {
    fields: [
      { name: 'username', type: 'select' },
      { name: 'password', type: 'password' }
    ]
  }

  authenticate = (event) => {
    event.preventDefault();
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const next = this.decideNextStep();
    this.props.onAuth(inputUsername, inputPassword, next);
  }

  decideNextStep = () => {
    const locationState = this.props.location.state;
    return  (locationState && locationState.from) || '/';
  }

  render() {
    const { usernames, onClear, errorMessage } = this.props;
    const fieldObject = this.state.fields.map(field => field.type === 'select' ? { ...field, options: usernames } : field);

    return (
      <div>
         <h3>Sign In to access content!</h3>
         <Form fields={fieldObject} onFocus={onClear}/>
         <span className="error">{ errorMessage }</span><br/>
         <button type="button"
                 className="btn btn-primary"
                 style={{ margin: '2%'}}
                 onClick={this.authenticate}>
            <b>LOGIN</b>
         </button><br/>
         <h4><i>Not a member? </i><Link to={'/register'}>Register here</Link></h4>
      </div>
    )
  }
}

export default withRouter(Login);
