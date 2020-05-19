import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/home";
import Social from "./pages/social/Social";
import Navbar from "./components/navbar/navbar";
import AboutMe from "./pages/about-me/aboutMe";

function Portfolio() {
	return (
		<>
			<Router>
				<Navbar />
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
				<Switch>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/about">
						<AboutMe />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
			<Social />
		</>
	);
}

ReactDOM.render(<Portfolio />, document.querySelector("#root"));
