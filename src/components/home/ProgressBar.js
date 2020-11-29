import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function ProgressBar(props) {
   const { options, user } = props;
   const numOfVoters = options.reduce((total, item) => total + item.votes.length, 0);

   function calculatePercentage(votes) {
     return Math.floor(votes/numOfVoters*100);
   }

   function userVote(option) {
     return option.votes.indexOf(user) != -1;
   }

   return (
      <div>
       <h3><b>Results:</b></h3>
       <ul>
         { options.map(option =>
           <li style={{ width: '30%', margin: '0 auto', marginTop: '5%', marginBottom: '7%' }} key={option.text}>
             <h3 className="resultText">Would You Rather {option.text} </h3>
             <h4>{option.votes.length}/{numOfVoters} votes</h4>
             {userVote(option) && (<span style={{ fontSize: '70%'}}><FontAwesomeIcon icon={faCheck} size="sm" style={{ color: 'green' }}/>Your vote</span>)}
             <div style={{ backgroundColor: 'gray' }}>
               <div style={{ backgroundColor: 'green', width: `${calculatePercentage(option.votes.length)}%` }}>
                 {calculatePercentage(option.votes.length)}%
               </div>
             </div>
          </li>)
          }
        </ul>
      </div>
   )
}

export default ProgressBar;
