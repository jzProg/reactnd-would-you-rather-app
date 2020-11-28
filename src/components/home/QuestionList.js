import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionList extends Component {
  render() {
   return (
     <div>
      <ul>
        { Object.values(this.props.questions).map(question =>
          <li>
          { question.id }
          </li>) }
      </ul>
     </div>
   )
 }
}

function mapStateToProps({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(withRouter(QuestionList));
