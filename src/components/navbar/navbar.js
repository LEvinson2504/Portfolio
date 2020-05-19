import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<nav
				class="navbar is-dark is-fixed-top"
				role="navigation"
				aria-label="main navigation"
			>
				<div class="navbar-brand">
					<span class="navbar-item">
						<i class="fas fa-home"></i> &nbsp;
						<Link to="/" class="has-text-white">
							Home
						</Link>
					</span>
					<span class="navbar-item">
						<i class="fas fa-tasks"></i> &nbsp;
						<Link to="/projects" class="has-text-white">
							Projects
						</Link>
					</span>
					<span class="navbar-item">
						<i class="fas fa-user-circle"></i> &nbsp;
						<Link to="/about" class="has-text-white">
							About me
						</Link>
					</span>
				</div>
			</nav>
		</>
	);
}
