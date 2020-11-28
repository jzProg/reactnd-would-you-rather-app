import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faReply } from '@fortawesome/free-solid-svg-icons';

function User(props) {
   const { username, image, questionsAsked, questionsAnswered } = props;

   return (
     <div class="user">
       <div class="userDiv">
         <img src={image} alt="Avatar" className="avatar"/>
         <label class="username">{username}</label>
       </div>
       <div class="questionDiv">
       <div>
         <FontAwesomeIcon icon={faQuestion} size="lg" style={{ color: 'orange' }}/>
         <span class="score">{questionsAsked}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faReply} size="lg" style={{ color: 'green' }}/>
          <span class="score">{questionsAnswered}</span>
        </div>
       </div>
     </div>
   )
}

export default User;
