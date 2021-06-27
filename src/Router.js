import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/login/login";
// import History from "./Pages/History/history";
import Home from "./Pages/Home/home";
import History from "./Pages/History/history"
import Loginredirect from "./Pages/login/loginredirect";

const ReactRouterSetup = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route  exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
              <Route exact path="/redirect">
            <Loginredirect />
          </Route>
          <Route  exact path="/history">
            <History />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default ReactRouterSetup;
