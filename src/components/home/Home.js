import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/shared';
import { connect } from 'react-redux';
import Leaderboard from './Leaderboard';
import NavigationBar from './NavigationBar';

class Home extends Component {

  logout = () => {
    const { dispatch, history } = this.props;
    dispatch(logoutUser());
    history.push('/');
  }

  render() {
   const { username, users } = this.props;
   return (
     <div className="App-home">
      <NavigationBar/>
      <div>{username}</div>
      <img src={users[username] && users[username].avatarURL} alt="Avatar" className="avatar"/><br/>
      <Leaderboard/>
      <button type="button" className="btn btn-danger" onClick={this.logout}><b>LOGOUT</b></button>
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
