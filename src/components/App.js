import { React, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Visitor from './Visitor';
import Home from './Home';
import PrivateRoute from './PrivateRoute';

class App extends Component {

  state = {
    authToken: '',
    isLoaded: false
  }

  componentDidMount() {
   this.setState({ authToken: sessionStorage.getItem('authed'), isLoaded: true })
  }

  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <Route path='/'>
               <Visitor auth={(token) => { this.setState({ authToken: token }); }}/>
              </Route>
              {this.state.isLoaded && (<PrivateRoute component={Home} path='/' token={this.state.authToken}/>)}
            </header>
          </div>
        </Router>
      )
  }
}

export default App;
