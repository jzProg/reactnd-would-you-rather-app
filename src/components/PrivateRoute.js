import { Redirect } from "react-router";
import { Route } from 'react-router-dom';
import { getHash } from '../utils/encryption';

function PrivateRoute ({ component: Component, token, ...props }) {

  function checkAuth() {
    let users = JSON.parse(localStorage.getItem('users') || JSON.stringify({}));
    return Object.values(users).filter(value => JSON.stringify(value) === JSON.stringify(getHash(token))).length;
  }

  return (
    <Route
      {...props}
      render={innerProps =>
        checkAuth() ? (
          <Component {...innerProps} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location }}}/>
        )
      }
    />
  );
}

export default PrivateRoute;
