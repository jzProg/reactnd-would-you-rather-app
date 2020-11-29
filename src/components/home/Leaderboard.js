import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import User from './User';

class Leaderboard extends Component {

  render() {
    const { users, username } = this.props;

    return (
      <div>
        <ul>
          { Object.values(users).sort((user1, user2) => Object.keys(user1.answers).length + user1.questions.length < Object.keys(user2.answers).length + user2.questions.length)
                 .map(user => <User username={user.id}
                                    key={user.id}
                                    image={user.avatarURL}
                                    isYou={username === user.id}
                                    questionsAsked={user.questions.length}
                                    questionsAnswered={Object.keys(user.answers).length}/>)
          }
        </ul>
      </div>
   )
  }
}

function mapStateToProps({ users, authed }) {
  return {
    users,
    username: authed.username
  }
}

export default connect(mapStateToProps)(withRouter(Leaderboard));
