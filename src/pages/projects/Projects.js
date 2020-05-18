import React, { Component } from "react";
import NavButton from "../../components/buttons/navbutton.js";
import ProjectTile from "../../components/project-tile/project-tile.js";
import Data from "../../components/data/data.json";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const list = {
	hidden: {
		x: -200,
		opacity: 0,
		transition: {
			delay: 0.25
		}
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.25
		}
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
			<div class="container is-widescreen">
				<div class="columns">
					<div class="column"></div>
					<div class="column is-two-thirds-desktop is-three-quarters-tablet">
						<h3 class="title is-1 text-center">Projects</h3>
						<motion.div
							class="tile is-ancestor is-vertical"
							// initial="hidden"
							// animate="visible"
							// variants={list}
						>
							{this.state.data.projects.map((obj) => {
								return (
									<>
										<InView
											triggerOnce={true}
										>
											{({inView, ref}) => (
												<div
													ref={ref}
												>
													<motion.div 
														class="tile is-parent"
														variants={list}
														initial="hidden"
														animate={`${inView ? "visible" : "hidden"}`}
													>
														<ProjectTile
															key={obj.id}
															imageLink={obj.imageLink}
															imageStyle={""}
															title={obj.name}
															subtitle={obj.description}
															link={obj.link}
														/>
													</motion.div>
												</div>
											)}
										</InView>
									</>
								);
							})}
						</motion.div>
					</div>
					<div class="column"></div>
				</div>
				<NavButton buttonAlign="is-centered" />
			</div>
		);
	}
}

export default Projects;
