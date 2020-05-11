import React, {Component} from 'react';
// import PropTypes from 'prop-types'
import Button from '../../components/buttons/button.js';
import Data from '../../components/data/data.json';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFetching: true,
			data: {}
		}
	}

	componentDidMount() {
		this.Init();
	}

	Init() {
		if (this.state.isFetching) {
			this.setState({data: Data}, () => {
				console.log("Data is fetched.");
				this.setState({isFetching: false});
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
				<Button buttonName="Learn more" buttonLink="/about" />
			</div>
			</div>
		</section>
		)
	}
}

export default Home;