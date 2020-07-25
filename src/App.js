// libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Front from "./pages/front";
import Contact from "./pages/contact";

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
              <Route exact path="/contact">
                <Contact />
              </Route>
          </Switch>
      </Router>
    </>
  );
}

