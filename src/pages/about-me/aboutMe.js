import React, { Component } from "react";
import "../../index";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";
import Progress from "../../components/progressbar/progress"
import { Frame } from "framer";
var ProgressBar = require('progressbar.js');

const list = {
	hidden: {
		x: -200,
		opacity: 0,
		transition: {
			when: "afterChildren",
		},
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.25,
		},
	},
};
class AboutMe extends Component {
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
				this.setState({ isFetching: false });
				// console.log("Data is fetched.");
				// console.log(this.state.data);
			});
		}
	}
	render() {
		if (this.state.isFetching) {
			return "Not loaded yet";
		} else {
			return (
				<motion.div
					class="container box margin-top"
					initial="hidden"
					animate="visible"
					variants={list}
				>
					<div class="columns margin-top is-desktop">
						<div class="column is-one-third">
							<div class="card">
								<figure class="image is-fullwidth">
									<img
										class=""
										src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mountainviewphoto.com%2Fwp-content%2Fuploads%2F2015%2F12%2Fheadshots-slide.jpg&f=1&nofb=1"
										alt=""
									/>
								</figure>
								<div class="card-content">
									<h2 class="has-text-weight-bold title">
										{this.state.data.name}
									</h2>
									<h3 class="subtitle">
										{this.state.data.about.job_title}
									</h3>
								</div>
							</div>
						</div>
						<div class="column is-two-thirds-desktop">
							<h2 class="title has-text-dark"> Expertise </h2>
							<div class="columns">
								{this.state.data.about.expertise.map((item) => (
									<div class="column">
										<img
											src={item.imageLink ?? ""}
											alt=""
										/>
										<h2 class="has-text-black">
											{item.title}
										</h2>
										<p class="">
											{item.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div class="columns is-desktop">
						<div class="column has-text-justified">
							<h2 class="title has-text-dark"> Summary </h2>
							{/* Could make this a component */}
							{this.state.data.about.summary}
						</div>
						<div class="column is-two-thirds">
							<h2 class="title has-text-dark"> Skills </h2>
							{/* Could make this a component */}
							{this.state.data.about.skills.map((item) => (
								<>
									<div class="column">
										<p class="has-text-black subtitle">
											{item.title}
										</p>
										{/* <Progress progress = {item.proficiency} /> */}

										{/* Another implementation */}
										<progress
											key={item.id}
											class="progress progress-bar is-primary"
											value={item.proficiency}
											max="100"
										></progress>
									</div>
								</>
							))}
						</div>
					</div>
				</motion.div>
			);
		}
	}
}

export default AboutMe;
