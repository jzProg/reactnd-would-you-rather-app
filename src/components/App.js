import { React, Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
    const { users, authToken } = this.props;
    return (
        <Router>
          <div className="App">
              { this.state.load && (
                  <header className="App-header">
                    <Visitor/>
                    <PrivateRoute component={Home} users={users} path='/home' token={authToken}/>
                  </header>
              )}
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
