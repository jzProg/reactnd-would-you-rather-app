import { Route } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import AddNewQuestion from './AddNewQuestion';
import QuestionNav from './QuestionNav';
import Poll from './Poll';

function ContentFragment() {
   return (
     <div className="container">
       <Route exact path='/'>
         <QuestionNav/>
       </Route>
       <Route exact path='/leaderboard'>
         <Leaderboard/>
       </Route>
       <Route exact path='/AddNewQuestion'>
         <AddNewQuestion/>
       </Route>
       <Route path='/questions/:questionId'>
         <Poll/>
       </Route>
     </div>
   )
}

export default ContentFragment;
