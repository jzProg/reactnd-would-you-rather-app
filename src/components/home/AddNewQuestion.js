import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addQuestionAction } from '../../actions/shared';
import Form from '../Form';

class AddNewQuestion extends Component {

  state = {
    text: 'Would You Rather...',
    fields: [
      { name: 'option A', type: 'text'},
      { name: 'option B', type: 'text'}
    ],
    errorMessage: ''
  }

  addNewQuestion = (event) => {
    event.preventDefault();
    const optionA = document.getElementById('option A').value;
    const optionB = document.getElementById('option B').value;
    if (!optionA || !optionB) {
      this.setState({ errorMessage: 'All fields are required...'});
      return;
    }
    const { dispatch, history } = this.props;
    dispatch(addQuestionAction(optionA, optionB)).then(() => {
      history.push('/');
    });
  }

  clear = () => {
    this.setState({ errorMessage: '' });
  }

  render() {
   const  { text, fields, errorMessage } = this.state;
   return (
     <div className="addNewQuestionDiv">
      <h3>{ text }</h3>
      <Form fields={fields} onFocus={this.clear}/>
      <span className="error">{ errorMessage }</span><br/>
      <button type="button"
              className="btn btn-primary"
              style={{ margin: '2%'}}
              onClick={this.addNewQuestion}>
         <b>ADD</b>
      </button><br/>
     </div>
   )
 }
}

export default connect()(withRouter(AddNewQuestion));
