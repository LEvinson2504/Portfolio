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
    <>
        <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <span class="navbar-item"> 
                <i class="fas fa-home"></i> &nbsp;
                <Link to="/" class="has-text-white">Home</Link>
                </span>
                <span class="navbar-item">
                <i class="fas fa-tasks"></i> &nbsp;
                <Link to="/projects" class="has-text-white">Projects</Link>
                </span>
            </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
        {/* <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
    </>
  );
}