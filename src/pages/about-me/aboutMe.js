import React, { Component } from "react";
import "../../index";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";
import ProgressBar from "../../components/progressbar/progress"

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
										src={this.state.data.about.profile_picture}
										alt="image"
									/>
								</figure>
								<div class="card-content">
									<h2 class="has-text-weight-bold title">
										{this.state.data.name}
									</h2>
									<h3 class="subtitle">
										{this.state.data.about.job_title}
									</h3>
									<button class="button is-outlined is-rounded is-fullwidth">{this.state.data.contact}</button>
									<a class="button is-black is-rounded is-fullwidth" href={`${'mailto:'+this.state.data.email}`}>{this.state.data.email}</a>
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
											<i class="fas fa-fill-drip"></i> {item.title}
										</p>
										<ProgressBar width={100} percent={item.proficiency} />
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
