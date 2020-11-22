import { React, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
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
            <header className="App-header">
              <div className="App-logo">
                <FontAwesomeIcon icon={faQuestionCircle} size="lg" style={{ marginTop: '2%', color: '#337ab7'}}/><br/>
                <h1><b><i>Would You Rather...</i></b></h1>
              </div>
              <div className="App-content">
                <Route path='/'>
                 <Visitor />
                </Route>
                { this.state.load && (<PrivateRoute component={Home} users={users} path='/' token={authToken}/>)}
              </div>
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
