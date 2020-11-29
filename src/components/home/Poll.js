import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import Vote from './Vote';

class Poll extends Component {

  render() {
    const { questions, users, username, match } = this.props;
    const { questionId } = match.params;
    const { author } = questions[questionId];
    const { avatarURL } = users[author];

    return (
      <div className="pollDiv">
        <i>Asked by</i>
        <span  style={{ marginLeft: '1%', color: '#337ab7'}}>{ author }</span>
        <img style={{ marginLeft: '1%'}} src={ avatarURL } alt="Avatar" className="avatar"/>
        { users[username].answers[questionId] ?
          (<ProgressBar/>)
          :
          (<Vote/>)
        }
      </div>
   )
  }
}

function mapStateToProps({ questions, users, authed }) {
  return {
    questions,
    users,
    username: authed.username
  }
}

export default connect(mapStateToProps)(withRouter(Poll));
