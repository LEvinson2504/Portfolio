import React, { Component } from "react";
// import PropTypes from 'prop-types'
import Button from "../../components/buttons/button.js";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";

class Home extends Component {
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
        console.log("Data is fetched.");
        this.setState({ isFetching: false });
      });
    }
  }

  render() {
    if (this.state.isFetching) {
      return "Not loaded yet";
    }

    return (
      <>
        <section class="hero is-white is-fullheight">
          <div class="container">
            <div class="title">
              <h1 class="title-name"> Levinson </h1>
              <h1 class="title-name"> D'souza </h1>
              <h2 class="subtitle">
                My passion is creating, and I find <br /> happiness in being a
                better me <br />
                today than the me yesterday.
              </h2>
            </div>
          </div>
          <div className="hero-body"></div>
        </section>
        <section class="hero is-white is-large">
          <div class="hero-body">
            <div class="container">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 7,
                  velocity: 2,
                  duration: 0.5,
                }}
              >
                <h1 class="title-question">{this.state.data.title}</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 7,
                  velocity: 1,
                  duration: 0.5,
                }}
              >
                <h2 class="subtitle">{this.state.data.subtitle}</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 7,
                  velocity: 2,
                  duration: 0.5,
                }}
              >
                <Button buttonName="Learn more" buttonLink="/about" />
              </motion.div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
