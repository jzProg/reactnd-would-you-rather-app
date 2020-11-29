import { React, Component } from 'react';
import Form from '../Form';

class Vote extends Component {
  render() {
    const [optionOne, optionTwo] = this.props.options;
    const fieldObject = [optionOne, optionTwo].map(option => { return { id: option.id, name: option.value.text, type: 'radio' }; });
    return (
       <div>
         <div className="voteDiv">
           <h3 style={{ color: 'orange' }}><b>Would You Rather...</b></h3>
           <Form fields={fieldObject} onFocus={this.props.onSelect} selected={this.props.selected}/>
           <span className="error">{ this.props.errorMessage }</span>
         </div>
         <button type="button" className="btn btn-primary" onClick={this.props.onVote}>Vote</button>
       </div>
    )
  }
}

export default Vote;
