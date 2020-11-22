import { Route } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import AddNewQuestion from './AddNewQuestion';
import QuestionList from './QuestionList';

function ContentFragment() {
   return (
     <div>
       <Route exact path='/home'>
         <QuestionList/>
       </Route>
       <Route exact path='/home/leaderboard'>
         <Leaderboard/>
       </Route>
       <Route exact path='/home/AddNewQuestion'>
         <AddNewQuestion/>
       </Route>
     </div>
   )
}

export default ContentFragment;
