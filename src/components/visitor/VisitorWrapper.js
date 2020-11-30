import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Route } from 'react-router-dom';

function VisitorWrapper ({ component: Component, path, ...props }) {
  
  return (
    <Route exact path={path}>
      <div className="App-logo">
        <FontAwesomeIcon icon={faQuestionCircle} size="lg" style={{ marginTop: '2%', color: '#337ab7'}}/><br/>
        <h1><b><i>Would You Rather...</i></b></h1>
      </div>
      <div className="App-content">
       <Component {...props} />
      </div>
    </Route>
  );
}

export default VisitorWrapper;
