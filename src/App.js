import React from "react";
import NavBar from "./Nav/NavBar";
import LandingPage from "./LandingPage/LandingPage";
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
