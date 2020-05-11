import React, { Component } from 'react';
import Data from '../../components/data/data.json';
class Social extends Component {
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
          <section class="hero is-dark is-medium">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-3 text-center">
                    Follow me on: &nbsp;
                    <a href={this.state.data.social[0].link ?? ''} class="has-text-light">
                      <i class="fab fa-instagram"></i></a> &nbsp;
                    <a href={this.state.data.social[1].link ?? ''} class="has-text-light">
                      <i class="fab fa-facebook-f"></i></a> &nbsp;
                    <a href={this.state.data.social[2].link ?? ''} class="has-text-light">
                      <i class="fab fa-github"></i></a>
              </h1>
            </div>
          </div>
        </section>
      );
  }
}
export default Social;