import { Redirect } from "react-router";
import { Route } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';

function PrivateRoute ({ component: Component, token, ...props }) {

  function checkAuth() {
    let users = JSON.parse(localStorage.getItem('users') || JSON.stringify({}));
    return Object.values(users).filter(value => JSON.stringify(value) === JSON.stringify(sha256(token).words)).length;
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
