import { faQuestion, faReply } from '@fortawesome/free-solid-svg-icons';
import Score from './Score';

function User(props) {
   const { username, image, questionsAsked, questionsAnswered, isYou } = props;

   return (
     <div className="user">
       <div className="userDiv">
         <img src={image} alt="Avatar" className="avatar"/>
         <label className="username">{username}</label>
         { isYou  && (<span className="userIndicator">You</span>) }
       </div>
       <div className="questionDiv">
        <Score faIcon={faQuestion} color={'orange'} scoreValue={questionsAsked}/>
        <Score faIcon={faReply} color={'green'} scoreValue={questionsAnswered}/>
       </div>
     </div>
   )
}

export default User;
