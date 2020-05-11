import React, { Component } from 'react';
import NavButton from '../../components/buttons/navbutton.js';
import ProjectTile from '../../components/project-tile/project-tile.js';
import Data from '../../components/data/data.json';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
			isFetching: true,
            data: {},
        }
    }

	componentDidMount() {
		this.Init();
	}

	Init() {
		if (this.state.isFetching) {
			this.setState({data: Data}, () => {
				this.setState({isFetching: false});
				console.log("Data is fetched.");
				console.log(this.state.data);
			});
		};
	}

    render() {
        if (this.state.isFetching) {
            return "Not loaded yet"
        }

        return (
            <>
                <div class="columns">
                    <div class="column"></div>
                    <div class="column is-two-thirds-desktop is-three-quarters-tablet">
                        <h3 class="title is-1 text-center">Projects</h3>
                        <div class="tile is-ancestor is-vertical">
                                {this.state.data.projects.map(obj => {
                                    return <>
                                        <div class="tile is-parent">
                                            <ProjectTile
                                                key={obj.id}
                                                imageLink={obj.imageLink}
                                                title={obj.name}
                                                subtitle={obj.description}
                                                link={obj.link}
                                            />
                                        </div>
                                    </>
                                })}
                        </div>
                    </div>
                    <div class="column"></div>
                </div>
                        <NavButton buttonAlign="is-centered" />
            </>
        );
    }
}

export default Projects;