import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import User from './User';

class Leaderboard extends Component {

  compare = (item1, item2) => {
    return this.sumOfQuestions(item2) - this.sumOfQuestions(item1);
  }

  sumOfQuestions = (user) => {
    return Object.keys(user.answers).length + user.questions.length;
  }

  render() {
    const { users, username } = this.props;

    return (
      <div className="scrollable">
        <ul>
          { Object.values(users).sort((user1, user2) => this.compare(user1, user2))
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
