import { Route } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import AddNewQuestion from './AddNewQuestion';
import QuestionNav from './QuestionNav';
import Poll from './Poll';

function ContentFragment() {
   return (
     <div className="container">
       <Route exact path='/home'>
         <QuestionNav/>
       </Route>
       <Route exact path='/home/leaderboard'>
         <Leaderboard/>
       </Route>
       <Route exact path='/home/AddNewQuestion'>
         <AddNewQuestion/>
       </Route>
       <Route path='/home/questions/:questionId'>
         <Poll/>
       </Route>
     </div>
   )
}

export default ContentFragment;
