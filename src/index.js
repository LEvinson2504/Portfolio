import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css'
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/home";
// import Home from './pages/home/home';
import Social from './pages/social/Social'
import Navbar from './components/navbar/navbar'
import AboutMe from './pages/about-me/aboutMe';
// import PropTypes from 'prop-types'

function Portfolio() {
  return(
    <>
      <Router>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
          <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/aboutme">
                <AboutMe />
              </Route>
              <Route path="/">
                <Home />
              </Route>
          </Switch>
        <Social />
      </Router>
    </>
  )
}

ReactDOM.render(<Portfolio />, document.querySelector("#root"));