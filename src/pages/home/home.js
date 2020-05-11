import React, { Component } from "react";
// import PropTypes from 'prop-types'
import Button from "../../components/buttons/button.js";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";

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
			<section class="hero is-info is-large">
				<div class="hero-body">
					<div class="container">
						<motion.div
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
						>
							<h1 class="title is-size-1 has-text-weight-bold">
								{this.state.data.title}
							</h1>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -200 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
						>
							<h2 class="subtitle">{this.state.data.subtitle}</h2>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 200 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
						>
							<Button buttonName="Learn more" buttonLink="/about" />
						</motion.div>
					</div>
				</div>
			</section>
		);
	}
}

export default Home;
