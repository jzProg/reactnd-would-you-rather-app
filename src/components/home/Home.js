import { React, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/shared';
import { connect } from 'react-redux';
import NavigationBar from './NavigationBar';
import ContentFragment from './ContentFragment';

class Home extends Component {

  state = {
    categories: [
      { text: 'HOME', path: '/home'},
      { text: 'ADD NEW QUESTION', path: '/home/AddNewQuestion'},
      { text: 'LEADERBOARD', path: '/home/leaderboard'}
    ],
    selected: 0,
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
   const { categories, selected } = this.state;
   return (
     <div className="App-home">
      <NavigationBar onLogout={this.logout} users={users} username={username} selected={selected} categories={categories} onToggle={this.toggle}/>
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
