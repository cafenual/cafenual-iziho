import "./App.css";
import React from "react";
import Dash from "./pages/Dash/index";
import Join from "./pages/Join/join";
import Login from "./pages/Login/login.js";
import Recipe from "./components/Recipe/RecipeCategory/index";
import Notice from "./pages/Notice/index";
import Manual from "./pages/Manual/index";
import Transition from "./pages/Transition/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "layouts/Header/Top";
import RecipeDetail from "pages/Recipe/RecipeDetail/";
import RecipeEditor from "components/Recipe/RecipeEditor/index.js";
import User from "./pages/Dash/User";
import Management from "pages/Management/index";
import Schedule from "pages/Scheduler/index";
import TransitionCreate from "pages/Transition/TransitionCreate/index";
import TransitionUpdate from './pages/Transition/TransitionUpdate/index';

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Dash} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/notice" component={Notice} />
          <Route path="/schedule" component={Schedule} />
          {/* <Route path="/message" component={Message} /> */}
          <Route path="/management" component={Management} />
          <Route path="/transition/:transId?" component={Transition} />
          <Route path="/transitionCreate" component={TransitionCreate} />
          <Route path="/transitionUpdate/:transId?" component={TransitionUpdate} />
          <Route path="/manual" component={Manual} />
          <Route path="/editor" component={RecipeEditor} />
          <Route path="/recipe/:id?" component={RecipeDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
