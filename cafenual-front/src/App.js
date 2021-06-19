import "./App.css";
import Commute from "./pages/Commute";
import Join from "./pages/Join";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "layouts/Header/Top";
import Nav from "./layouts/Header/Side";
//test123asd

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Header />
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/commute" component={Commute} />
          <Route path="/join" component={Join} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
