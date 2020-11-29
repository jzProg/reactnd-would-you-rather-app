import { React, Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInitialData } from '../actions/shared';
import Visitor from './visitor/Visitor';
import Home from './home/Home';
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
    const { users, authed } = this.props;
    return (
        <Router>
          <div className="App">
              { this.state.load && (
                  <header className="App-header">
                    <Visitor/>
                    <PrivateRoute component={Home}
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

function mapStateToProps({ authed, users }) {
  return {
    users,
    authed
  }
}

export default connect(mapStateToProps)(App);
