import "./App.css";
import React from "react";
import Dash from "./pages/Dash/index";
import Join from "./pages/Join/join";
import Login from "./pages/Login/login.js";
import Recipe from "./pages/Recipe/Recipe";
import Notice from "./pages/Notice/index";
import Manual from "./pages/Manual/index";
import Message from "./pages/Message/message";
import Transition from "./pages/Transition/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "layouts/Header/Top";
import Nav from "./layouts/Header/Side";
//test123asd

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Dash} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/notice" component={Notice} />
          <Route path="/message" component={Message} />
          <Route path="/transition" component={Transition} />
          <Route path="/manual" component={Manual} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
