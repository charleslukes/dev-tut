import React from "react";
import NavBar from "./Nav/NavBar";
import LandingPage from "./LandingPage/LandingPage";
import Stories from "./Stories/Stories";
import Articles from "./Articles/Articles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/articles" component={Articles} />
          <Route path="/stories" component={Stories} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
