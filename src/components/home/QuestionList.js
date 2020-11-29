import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionList extends Component {

  hasUserAnswered = (question) => {
    const { selected, user } = this.props;
    const hasAnswer = question.optionOne.votes.indexOf(user) !== -1 || question.optionTwo.votes.indexOf(user) !== -1;
    if (!selected) { // unanswered
      return !hasAnswer;
    }
    return hasAnswer;
  }

  seeDetails = (questionId) => {
    this.props.history.push(`/home/questions/${questionId}`);
  }

  render() {
   return (
     <div className="scrollable">
        { this.props.questions.filter(question => this.hasUserAnswered(question)).map(question =>
          <Question key={question.id} question={question} onDetails={this.seeDetails}/>)
        }
     </div>
   )
 }
}

function mapStateToProps({ questions, authed }) {
  return {
    questions: Object.values(questions).sort((question1, question2) => question1.timestamp < question2.timestamp),
    user: authed.username
  }
}

export default connect(mapStateToProps)(withRouter(QuestionList));
