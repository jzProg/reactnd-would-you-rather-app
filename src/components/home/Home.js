import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/shared';
import { connect } from 'react-redux';
import NavigationBar from './NavigationBar';
import ContentFragment from './ContentFragment';
import Logout from './Logout';

class Home extends Component {

  state = {
    categories: [
      { text: 'HOME', path: '/home'},
      { text: 'ADD NEW QUESTION', path: '/home/AddNewQuestion'},
      { text: 'LEADERBOARD', path: '/home/leaderboard'}
    ],
    selected: 0,
    navColors: { color: 'gray', selectionColor: 'darkgray' }
  }

  logout = () => {
    const { dispatch, history } = this.props;
    dispatch(logoutUser());
    history.push('/');
  }

  toggle = (index) => {
    this.setState({ selected: index });
    this.props.history.replace(this.state.categories[index].path);
  }

  render() {
   const { username, users } = this.props;
   const { categories, selected, navColors } = this.state;
   return (
     <div className="App-home">
      <NavigationBar component={Logout}
                     extraData={{users, username, onLogout: this.logout}}
                     navColor={navColors}
                     username={username}
                     selected={selected}
                     categories={categories}
                     onToggle={this.toggle}/>
      <ContentFragment/>
     </div>
   )
 }
}

function mapStateToProps({ authed, users }) {
  return {
    username: authed.username,
    users
  }
}

export default connect(mapStateToProps)(withRouter(Home));
