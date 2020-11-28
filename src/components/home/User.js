import { faQuestion, faReply } from '@fortawesome/free-solid-svg-icons';
import Score from './Score';

function User(props) {
   const { username, image, questionsAsked, questionsAnswered } = props;

   return (
     <div class="user">
       <div class="userDiv">
         <img src={image} alt="Avatar" className="avatar"/>
         <label class="username">{username}</label>
       </div>
       <div class="questionDiv">
        <Score faIcon={faQuestion} color={'orange'} scoreValue={questionsAsked}/>
        <Score faIcon={faReply} color={'green'} scoreValue={questionsAnswered}/>
       </div>
     </div>
   )
}

export default User;
