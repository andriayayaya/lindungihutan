import React from "react";
import Home from "./container/Home/Home";
import Kampanye from "./container/Kampanye/Kampanye";
import Profile from "./container/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Kampanye">
          <Kampanye />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;