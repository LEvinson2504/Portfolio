import React, { Component } from 'react';
import Button from '../../components/buttons/button.js';
import ProjectTile from '../../components/project-tile/project-tile.js';

class Projects extends Component {
    render() {
        return (
            <>
                <div class="columns">
                    <div class="column"></div>
                    <div class="column is-one-third-desktop is-two-thirds-tablet">
                        <h3 class="title is-1 text-center">Projects Page</h3>
                        <div class="tile is-ancestor is-vertical">
                            <div class="tile is-parent">
                                <ProjectTile imageLink="office" />
                            </div>
                            <div class="tile is-parent">
                                <ProjectTile imageLink="cubicle" />
                                <div class="tile is-child is-vertical">
                                    <ProjectTile imageLink="software" />
                                    <ProjectTile imageLink="hardware" />
                                    <ProjectTile imageLink="table" />
                                    <ProjectTile imageLink="projects" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column"></div>
                </div>
            </>
        );
    }
}

export default Projects;