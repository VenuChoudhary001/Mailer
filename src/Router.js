import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/login";
import History from "./Pages/history";

const ReactRouterSetup = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/history">
                    <History />
                </Route>
            </Switch>
        </Router>
        </>

    )
}

export default ReactRouterSetup ;