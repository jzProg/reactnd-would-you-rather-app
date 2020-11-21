import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {

  logout = () => {
    sessionStorage.setItem('authed', '');
    this.props.history.push('/login');
  }

  render() {
   return (
     <div>
      <div>Home</div>
      <button type="button" onClick={this.logout}>logout</button>
     </div>
   )
 }
}

export default withRouter(Home);
