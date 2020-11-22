import { Redirect } from "react-router";
import { Route } from 'react-router-dom';

function PrivateRoute ({ component: Component, token, users, ...props }) {

  function checkAuth() {
    return token && Object.values(users).filter(user => user.token === token).length;
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
