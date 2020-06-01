import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { jsx, css, Global } from "@emotion/core";

import Exam from "./Exam";
import Card from "./Card";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Exam} />
                <Route exact path="/card" component={Card} />
            </Switch>
        </Router>
    );
}
export default Routes;