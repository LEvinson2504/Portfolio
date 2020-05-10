import React, {Component} from 'react';
// import PropTypes from 'prop-types'
// import Projects from '../projects/Projects.js';
import Social from '../social/Social.js';
import Button from '../../components/buttons/button.js';

class Home extends Component {
  render() {
    return (
		<section class="hero is-info is-large">
		<div class="hero-body">
		  <div class="container">
			<h1 class="title is-size-1 has-text-weight-bold">
			  	I am a Front-end Developer, yes really.
			</h1>
			<h2 class="subtitle">
				<Button buttonName="Learn more" buttonLink="/projects" />
			</h2>
		  </div>
		</div>
	  </section>
	)
  }
}

export default Home;