import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Score(props) {
   const { faIcon, color, scoreValue } = props;

   return (
        <div>
          <FontAwesomeIcon icon={faIcon} size="lg" style={{ color }}/>
          <span class="score">{scoreValue}</span>
        </div>
   )
}

export default Score;
