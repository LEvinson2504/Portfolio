import React, { Component } from "react";
import NavButton from "../../components/buttons/navbutton.js";
import ProjectTile from "../../components/project-tile/project-tile.js";
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

class Projects extends Component {
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
		}

		return (
			<>
				<div class="columns">
					<div class="column"></div>
					<div class="column is-two-thirds-desktop is-three-quarters-tablet">
						<h3 class="title is-1 text-center">Projects</h3>
						<motion.div
							class="tile is-ancestor is-vertical"
							initial="hidden"
							animate="visible"
							variants={list}
						>
							{this.state.data.projects.map((obj) => {
								return (
									<>
										<motion.div
											class="tile is-parent"
											variants={list}
										>
											<ProjectTile
												key={obj.id}
												imageLink={obj.imageLink}
												title={obj.name}
												subtitle={obj.description}
												link={obj.link}
											/>
										</motion.div>
									</>
								);
							})}
						</motion.div>
					</div>
					<div class="column"></div>
				</div>
				<NavButton buttonAlign="is-centered" />
			</>
		);
	}
}

export default Projects;
