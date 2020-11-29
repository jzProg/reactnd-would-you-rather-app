import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

function Page404(props) {
   const { faIcon, color, scoreValue } = props;

   return (
      <div className="App-logo">
        <div className="App-content" style={{ minHeight: '100vh'}}>
        <FontAwesomeIcon icon={faFrown} size="lg"/>
           404 Not Found
        </div>
     </div>
   )
}

export default Page404;
