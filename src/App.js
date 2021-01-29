// libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Front from "./pages/front";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

// styling
import "./style.css";

export default () => {
  console.log(
    "Hello, thank you for your interest in my portfolio! Please reach out with any questions regarding my qualifications for your next project"
  );

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Front />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
