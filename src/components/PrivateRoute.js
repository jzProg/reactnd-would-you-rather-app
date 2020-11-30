import { Redirect } from "react-router";
import { Route } from 'react-router-dom';
import Page404 from './Page404';
import Login from './visitor/Login';
import Register from './visitor/Register';

function PrivateRoute ({ component: Component, auth, validRoutes, questions, users, ...props }) {

  function checkAuth() {
    const { token, username } = auth;
    return token && username && Object.values(users).filter(user => user.token === token).length;
  }

  function isValidRoute(path) {
    return validRoutes.filter(route => route === path  || (route.includes('*') && checkQuestionId(path))).length;
  }

  function checkQuestionId(path) {
    const parts = path.split('/');
    const qid = parts[parts.length - 1];
    return Object.values(questions).filter(question => question.id === qid).length;
  }

  function decideNextRouting(innerProps) {
    const path = innerProps.location.pathname;
    switch (path) {
      case '/register': return <Register/>
      case '/login': return <Login/>
      default: return validateHomePage(path, innerProps);
    }
  }

  function validateHomePage(path, props) {
    if (checkAuth()) { // valid session active ?
      if (!isValidRoute(path)) { // invalid route
        return <Page404/>
      }
      return <Component {...props} />
    }
    return <Redirect to={{ pathname: "/login", state: { from: path }}}/> // redirect to login + set next page path
  }

  return (
    <Route
      {...props}
      render={innerProps =>
        decideNextRouting(innerProps)
      }
    />
  );
}

export default PrivateRoute;
