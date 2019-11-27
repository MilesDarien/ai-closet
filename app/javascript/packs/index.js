// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// import React from "react";
// import ReactDOM from "react-dom";

// import "../scss/style.scss";

// import App from "../components/App";
// document.addEventListener("DOMContentLoaded", () => {
//   ReactDOM.render(, document.getElementById("root"));
// });

import React from "react";
import ReactDOM from "react-dom";
import "../scss/style.scss";
import App from "../components/App";
import LetMeChoose from "../components/LetMeChoose";

// import { Route, BrowserRouter as Router } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import AiCoordinate from "../components/AiCoordinate";

// const routing = (
//   <Router>
//     <Route exact path="/" render={() => <Redirect to={App} />} />
//     <Route path="../components/app" component={App} />
//     <Route path="../components/AiCoordinate" component={AiCoordinate} />
//     <Route path="../components/LetMeChoose" component={LetMeChoose} />
//   </Router>
// );

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
