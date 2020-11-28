import { React, Component } from 'react';
import NavigationBar from './NavigationBar';
import QuestionList from './QuestionList';

class QuestionNav extends Component {

  state = {
    categories: [
      { text: 'Unanswered' },
      { text: 'Answered' },
    ],
    selected: 0,
    navColors: { color: '#00264d', selectionColor: '#003366' }
  }

  toggle = (index) => {
    this.setState({ selected: index });
  }

  render() {
    const { navColors, selected, categories } = this.state;
    return (
      <div>
        <NavigationBar component={'span'}
                       navColor={navColors}
                       selected={selected}
                       categories={categories}
                       onToggle={this.toggle}/>
        <QuestionList/>
      </div>
   )
  }
}

export default QuestionNav;
