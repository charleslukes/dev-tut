import React from "react";
import NavBar from "./Nav/NavBar";
import LandingPage from "./LandingPage/LandingPage";
import Stories from "./Stories/Stories";
import Articles from "./Articles/Articles";
import DevProfile from "./DevProfile/DevProfile";
import Editor from "./Editor/Editor";
import Devs from "./Devs/Devs";
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
          <Route path="/devs" component={Devs} />
          <Route path="/devprofile" component={DevProfile} />
          <Route path="/editor" component={Editor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
