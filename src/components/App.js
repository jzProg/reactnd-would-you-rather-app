import { React, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInitialData } from '../actions/shared';
import Visitor from './Visitor';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import Footer from './Footer';

class App extends Component {

  state = {
    load: false
  }

  componentDidMount() {
    this.props.dispatch(fetchInitialData()).then(() => {
      this.setState({ load: true });
    });
  }

  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <Route path='/'>
               <Visitor />
              </Route>
              { this.state.load && (<PrivateRoute component={Home} users={this.props.users} path='/' token={this.props.authToken}/>)}
            </header>
            <Footer/>
          </div>
        </Router>
      )
  }
}

function mapStateToProps({ authed, users }) {
  return {
    users: users,
    authToken: authed.token
  }
}

export default connect(mapStateToProps)(App);
