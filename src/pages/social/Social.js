import React, { Component } from "react";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";

class Social extends Component {
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
        <section class="hero is-link is-small">
          <div class="hero-body">
            <div class="container is-desktop">
              <h1 class="title is-size-3 text-center">
                Follow me on: &nbsp;
                <motion.a
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.95 }}
                  href={this.state.data.social[0].link ?? ""}
                  class="has-text-light is-inline-block"
                >
                  <i class="fab fa-instagram" />
                </motion.a>{" "}
                &nbsp;
                <motion.a
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.95 }}
                  href={this.state.data.social[1].link ?? ""}
                  class="has-text-light is-inline-block"
                >
                  <i class="fab fa-facebook-f"></i>
                </motion.a>{" "}
                &nbsp;
                <motion.a
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.95 }}
                  href={this.state.data.social[2].link ?? ""}
                  class="has-text-light is-inline-block"
                >
                  <i class="fab fa-github"></i>
                </motion.a>
              </h1>
            </div>
          </div>
        </section>
      );
    }
  }
}
export default Social;
