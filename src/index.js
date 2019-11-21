import React from "react";
import ReactDOM from "react-dom";
import "./scss/style.scss";
import App from "./App";
import LetMeChoose from "./LetMeChoose";

import * as serviceWorker from "./serviceWorker";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import {Redirect} from "react-router-dom";
import AiCoordinate from "./AiCoordinate";
const routing = (
  <Router>
  <Route exact path="/" render={() => (
    <Redirect to="/app"/>
)}/>
    <Route path="/app" component={App} />
    <Route path="/AiCoordinate" component={AiCoordinate} />
    <Route path="/LetMeChoose" component={LetMeChoose} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
