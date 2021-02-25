import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {
  // const user = { name: "kimyb" };
  const user = null;

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          path={ROUTES.SING_IN}
          loggedInPath={ROUTES.BROWSE}
          exact
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          path={ROUTES.SING_UP}
          loggedInPath={ROUTES.BROWSE}
          exact
        >
          <Signup />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          path={ROUTES.HOME}
          loggedInPath={ROUTES.BROWSE}
          exact
        >
          <Home />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
