import { React, Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { fetchInitialData } from '../actions/shared';
import Visitor from './visitor/Visitor';
import Home from './home/Home';
import PrivateRoute from './PrivateRoute';
import Footer from './Footer';

class App extends Component {

  state = {
    validRoutes: [
      '/',
      '/leaderboard',
      '/add',
      '/register',
      '/login',
      '/questions/*'
    ],
    load: false
  }

  componentDidMount() {
    this.props.dispatch(fetchInitialData()).then(() => {
      this.setState({ load: true });
    });
  }

  render() {
    const { users, authed, questions } = this.props;
    return (
        <Router>
          <div className="App">
              <LoadingBar/>
              { this.state.load && (
                  <header className="App-header">
                    <Visitor/>
                    <PrivateRoute component={Home}
                                  validRoutes={this.state.validRoutes}
                                  questions={questions}
                                  users={users}
                                  auth={authed}/>
                  </header>
              )}
            <Footer/>
          </div>
        </Router>
      )
  }
}

function mapStateToProps({ authed, questions, users }) {
  return {
    users,
    questions,
    authed
  }
}

export default connect(mapStateToProps)(App);
