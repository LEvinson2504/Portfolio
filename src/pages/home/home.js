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
			<section class="stripe hero has-background-success is-large">
				<div class="hero-body">
					<div class="container">
						<motion.div
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								type: "spring",
								damping: 10,
								velocity: 1,
								duration: 0.5,
							}}
						>
							<h1 class="title is-size-1 has-text-weight-bold">
								{this.state.data.title}
							</h1>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								type: "spring",
								damping: 10,
								velocity: 1,
								duration: 1.5,
							}}
						>
							<h2 class="subtitle">{this.state.data.subtitle}</h2>
						</motion.div>
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
								buttonName="Learn more"
								buttonStyle="is-primary is-centered"
								buttonLink="/about"
								animate=""
							/>
						</motion.div>
					</div>
				</div>
			</section>
		);
	}
}

export default Home; 
