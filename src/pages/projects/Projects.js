import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Button from '../../components/buttons/button.js';
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
        } else {
            return (
                <>
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column is-one-third-desktop is-two-thirds-tablet">
                            <h3 class="title is-1 text-center">Projects</h3>
                            <div class="tile is-ancestor is-vertical">
                                <div class="tile is-parent">
                                    {this.state.data.projects.map(obj => {
                                        console.log(obj);
                                        return <ProjectTile
                                            key={obj.id}
                                            name={obj.name}
                                            description={obj.description}
                                            imageLink={obj.description}
                                            link={obj.link}
                                        />
                                    })}
                                </div>
                            </div>
                        </div>
                        <div class="column"></div>
                    </div>
                        <div class="buttons is-centered">
                            <Link to="/" class="button is-primary is-rounded" style={{textDecoration:'none'}}>
                                Return to home page
                            </Link>
                        </div>
                </>
            );
        }
        
    }
}

export default Projects;