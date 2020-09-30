// libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Front from "./pages/front";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Footer from "./components/footer";

// styling
import "./style.css";

export default ()=> {
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
}

