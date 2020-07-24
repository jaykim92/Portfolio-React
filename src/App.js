// libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Front from "./components/front";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";

// styling
import "./style.css";

function App() {
  return (
    <>
      <Router>
          <Switch>
              <Route exact path="/">
                <Front />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/resume">
                <Resume />
              </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
