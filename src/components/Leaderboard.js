import { React, Component } from 'react';
import { withRouter, Route } from 'react-router-dom';

class Leaderboard extends Component {

  render() {
   return (
     <Route path="/leaderboard">
      <div>Leaderboard</div>
     </Route>
   )
 }
}

export default withRouter(Leaderboard);
