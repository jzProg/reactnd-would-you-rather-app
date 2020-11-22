import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../actions/shared';
import { connect } from 'react-redux';
import Leaderboard from './Leaderboard';

class Home extends Component {

  logout = () => {
    const { dispatch, history } = this.props;
    dispatch(logoutUser());
    history.push('/login');
  }

  render() {
   const { username, users } = this.props;
   return (
     <div>
      <div>{username}</div>
      <img src={users[username] && users[username].avatarURL} alt="Avatar" className="avatar"/><br/>
      <Leaderboard/>
      <button type="button" onClick={this.logout}>logout</button>
     </div>
   )
 }
}

function mapStateToProps({ authed, users }) {
  return {
    username: authed.username,
    users
  }
}

export default connect(mapStateToProps)(withRouter(Home));
