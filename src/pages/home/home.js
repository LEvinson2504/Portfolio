import React, { Component } from "react";
// import PropTypes from 'prop-types'
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";
import NavButton from "../../components/buttons/navbutton.js";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFetching: true,
			data: {},
		};
	}

	componentDidMount() {
		this.Init();
	}

	Init() {
		if (this.state.isFetching) {
			this.setState({ data: Data }, () => {
				console.log("Data is fetched.");
				this.setState({ isFetching: false });
			});
		}
	}

	render() {
		if (this.state.isFetching) {
			return "Not loaded yet";
		}

		return (
			<div class="container is-widescreen">
				<div class="hero is-info is-large">
					<div class="hero-body">
						<div class="container is-fluid">
							<motion.div
								initial={{ opacity: 0, x: 200 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									type: "spring",
									damping: 7,
									velocity: 2,
									duration: 0.5,
								}}
							>
								<h1 class="title is-size-1 has-text-weight-bold has-text-right">
									{this.state.data.title}
								</h1>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -200 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									type: "spring",
									damping: 7,
									velocity: 1,
									duration: 0.5,
								}}
							>
								<h2 class="subtitle is-size-4 has-text-justified">
									{this.state.data.subtitle}
								</h2>
							</motion.div>
							<br></br>
							<motion.div
								initial={{ opacity: 0, y: 200 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									type: "spring",
									damping: 7,
									velocity: 2,
									duration: 0.5,
								}}
							>
								<NavButton
									buttonName={this.state.data.subtitle_button}
									buttonStyle="is-primary is-large"
									buttonAlign="is-centered"
									buttonLink="/about"
									animate=""
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
