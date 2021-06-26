import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/login";
// import History from "./Pages/History/history";
import Home from "./Pages/Home/home";

const ReactRouterSetup = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route  exact path="/home">
            <Home u="home"/>
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route  exact path="/history">
            <Home u="history"/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default ReactRouterSetup;
