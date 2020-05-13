import React, { Component } from "react";
import "../../index";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";

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
				console.log("Data is fetched.");
				console.log(this.state.data);
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
										<h2 class="is-size-4 has-text-black">
											{item.title}
										</h2>
										<p class="is-size-5">
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
							<p>
								Elit qui adipisicing sint culpa ut tempor
								commodo exercitation non proident do do et. Esse
								do laborum voluptate id sit et ad excepteur aute
								nulla veniam amet ullamco labore. Proident
								tempor duis consequat nostrud proident. Pariatur
								laborum mollit culpa incididunt labore sit quis
								ad sit.
							</p>
							<p>
								Culpa ut consequat mollit nulla nostrud magna
								dolor irure commodo in. Dolor consequat ipsum
								amet velit voluptate magna qui aute sit. Id in
								nulla est quis commodo sit sit in enim
								exercitation. Irure quis veniam aliqua irroident
								laboris qui dolore elit reprehenderit quis id.
								Duis officia adipisicing laboris dolore sint et
								incididunt.
							</p>
							<p>
								Consequat eu nostrud eiusmod aliqua id in ea
								amet esse dolor cupidatat. Minim culpa non quis
								esse in aliquip consequat pariatur eiusmod
								voluptate deserunt nulla id. Sunt ea mollit sint
								aliquip et magna. Esse proident dolore do
								incididunt proident nisi irure proident nulla
								ullamco adipisicing ullamco. Ad reprehenderit
								cupidatat commodo duis duis ad aute incididunt
								sit velit ipsum ex. Adipisicing tempor cillum
								nisi eu id esse.Magna cillum velit laboris ut
								est in occaecat veniam ex et nostrud dolor enim.
								Aliqua esse tempor exercitation excepteur. Est
								qui mollit reprehenderit consectetur laborum.
							</p>
						</div>
						<div class="column is-two-thirds">
							<h2 class="title has-text-dark"> Skills </h2>
							{/* Could make this a component */}
							{this.state.data.about.skills.map((item) => (
								<div class="column">
									<p class="has-text-black subtitle">
										{item.title}
									</p>
									<progress
										class="progress is-primary"
										value={item.proficiency}
										max="100"
									></progress>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			);
		}
	}
}

export default AboutMe;
