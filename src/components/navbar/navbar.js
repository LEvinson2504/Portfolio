import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from "../../pages/projects/Projects";
import Home from "../../pages/home/home";

export default function Navbar() {
  return (
    <Router>
        <nav class="navbar is-light" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <span class="navbar-item"> 
                <Link to="/">Home</Link>
                </span>
                <span class="navbar-item">
                <Link to="/projects">Projects</Link>
                </span>
            </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}