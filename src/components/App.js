import { React, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInitialData } from '../actions/shared';
import Visitor from './Visitor';
import Home from './Home';
import PrivateRoute from './PrivateRoute';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchInitialData());
  }

  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <Route path='/'>
               <Visitor />
              </Route>
              <PrivateRoute component={Home} users={this.props.users} path='/' token={this.props.authToken}/>
            </header>
          </div>
        </Router>
      )
  }
}

function mapStateToProps({ authed, users }) {
  return {
    users: users,
    authToken: authed
  }
}

export default connect(mapStateToProps)(App);
