import { Redirect } from "react-router";
import { Route } from 'react-router-dom';

function PrivateRoute ({ component: Component, auth, users, ...props }) {

  function checkAuth() {
    const { token, username } = auth;
    return token && username && Object.values(users).filter(user => user.token === token).length;
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
