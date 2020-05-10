import React, {Component} from 'react';
// import PropTypes from 'prop-types'
import Button from '../../components/buttons/button.js';
import { default as Data } from '../../components/data/data.json';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFetching: false,
			data: {}
		}
	}

	componentDidMount() {
		this.Init();
	}

	Init() {
		if (!this.isFetching) {
			this.setState({data: Data}, () => {
				console.log("Data is fetched.");
				this.isFetching = true;
			});
		};
	}

	render() {
		return (
			<section class="hero is-info is-large">
			<div class="hero-body">
			<div class="container">
				<h1 class="title is-size-1 has-text-weight-bold">
					{this.state.data.title}
				</h1>
				<h2 class="subtitle">
					{this.state.data.subtitle}
				</h2>
				<Button buttonName="Learn more" buttonLink="/projects" />
			</div>
			</div>
		</section>
		)
	}
}

export default Home;