import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import { logoutUser } from '../actions/shared';
import { connect } from 'react-redux';

class Home extends Component {

  logout = () => {
    this.props.dispatch(logoutUser());
    this.props.history.push('/login');
  }

  render() {
   return (
     <div>
      <div>Home</div>
      <div>{this.props.username}</div>
      <Leaderboard/>
      <button type="button" onClick={this.logout}>logout</button>
     </div>
   )
 }
}

function mapStateToProps({ authed, users }) {
  return {
    username: authed.username
  }
}

export default connect(mapStateToProps)(withRouter(Home));
