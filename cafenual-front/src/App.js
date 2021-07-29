import "./App.css";
import React from "react";
import Dash from "./pages/Dash/index";
import Join from "./pages/Join/join";
import Login from "./pages/Login/login.js";
import Recipe from "./components/Recipe/RecipeCategory/index";
import Notice from "./pages/Notice/index";
import Manual from "./pages/Manual/index";
import Message from "./pages/Message/message";
import Transition from "./pages/Transition/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "layouts/Header/Top";
import Nav from "./layouts/Header/Side";
import RecipeDetail from "pages/Recipe/RecipeDetail/";
import RecipeEditor from "components/Recipe/RecipeEditor/index.js";
import User from "./pages/Dash/User";
//test123asd

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/dash" component={Dash} />
          <Route exact path="/dash/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/notice" component={Notice} />
          <Route path="/message" component={Message} />
          <Route path="/transition" component={Transition} />
          <Route path="/manual" component={Manual} />
          <Route path="/editor" component={RecipeEditor} />
          <Route path="/recipe/:id?" component={RecipeDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
