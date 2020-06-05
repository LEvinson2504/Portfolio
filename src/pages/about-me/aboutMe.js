import React, { Component } from "react";
import "../../index";
import Data from "../../components/data/data.json";
import "/home/levinson/Documents/project/portfolio/src/index.css"
// import { motion } from "framer-motion";

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
				<section class="hero is-white is-fullheight">
					<div class="container">
						<div class="title">
							<h1 class="about-me-heading"> Skills </h1>
							{this.state.data.about.skills.map(skill => (
								<h2> {skill.title} </h2>
							))}
						</div>

						<div class="title">
							<h1 class="about-me-heading"> Books I read </h1>
							{this.state.data.books.map(book => (
								<>
									<h2> {book.title} </h2>
									<h3> - {book.author} </h3>
								</>
							))}
						</div>
					</div>
					<div className="hero-body"></div>
				</section >
			);
		}
	}
}

export default AboutMe;
