// libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Front from "./pages/front";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Header from "./components/header";
// import Footer from "./components/footer";

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
              <Route exact path="/info">
                <Header />
                <About />
                <Portfolio />
                <Contact />
                {/* <Footer /> */}
              </Route>
          </Switch>
      </Router>
    </>
  );
}

