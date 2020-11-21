import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import Leaderboard from './Leaderboard';

class Home extends Component {

  logout = () => {
    sessionStorage.setItem('authed', '');
    this.props.history.push('/login');
  }

  render() {
   return (
     <div>
      <div>Home</div>
      <Leaderboard/>
      <button type="button" onClick={this.logout}>logout</button>
     </div>
   )
 }
}

export default withRouter(Home);
