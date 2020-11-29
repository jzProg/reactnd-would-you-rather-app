import { Redirect } from "react-router";
import { Route } from 'react-router-dom';
import Page404 from './Page404';
function PrivateRoute ({ component: Component, auth, validRoutes, questions, users, ...props }) {

  function checkAuth() {
    const { token, username } = auth;
    return token && username && Object.values(users).filter(user => user.token === token).length;
  }

  function isValidRoute(path) {
    return validRoutes.filter(route => route === path  || (route.includes('*') && checkQuestionId(path)).length);
  }

  function checkQuestionId(path) {
    const parts = path.split('/');
    const qid = parts[parts.length - 1];
    return Object.values(questions).filter(question => question.id === qid).length;
  }

  return (
    <Route
      {...props}
      render={innerProps =>
        !isValidRoute(innerProps.location.pathname) ? (<Page404/>)
        :
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
