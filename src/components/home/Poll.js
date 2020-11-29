import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { answerQuestionAction } from '../../actions/shared';
import ProgressBar from './ProgressBar';
import Vote from './Vote';

class Poll extends Component {

  state = {
    selected: '',
    error: ''
  }

  vote = (event) => {
    event.preventDefault();
    const { selected } = this.state;
    if (!selected) {
      this.setState({ error: 'You should choose one option...'});
      return;
    }
    const { dispatch, match, history } = this.props;
    dispatch(answerQuestionAction(match.params.questionId, selected));
  }

  select = (event) => {
    const option = event.target.value;
    this.setState({ selected: option, error: '' });
  }

  render() {
    const { questions, users, username, match } = this.props;
    const { questionId } = match.params;
    const { author } = questions[questionId];
    const { avatarURL } = users[author];
    const { optionOne, optionTwo } = questions[questionId];

    return (
      <div className="pollDiv">
        <i>Asked by</i>
        <span  style={{ marginLeft: '1%', color: '#337ab7'}}>{ author }</span>
        <img style={{ marginLeft: '1%'}} src={ avatarURL } alt="Avatar" className="avatar"/>
        { users[username].answers[questionId] ?
          (<ProgressBar options={[optionOne, optionTwo]} user={username}/>)
          :
          (<Vote options={[{ id: 'optionOne', value: optionOne }, { id: 'optionTwo', value: optionTwo }]}
                 onVote={this.vote}
                 onSelect={this.select}
                 selected={this.state.selected}
                 errorMessage={this.state.error}/>)
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
