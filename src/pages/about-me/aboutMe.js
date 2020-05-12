import React, { Component } from "react";
import "../../index";
import Data from "../../components/data/data.json";
import { motion } from "framer-motion";

const list = {
  hidden: {
    x: -200,
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
class AboutMe extends Component {
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
        <motion.div
          class="container box margin-top"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <div class="columns margin-top">
            <div class="column is-2"></div>
            <div class="column is-one-third">
              <figure class="image is-fullwidth">
                <img
                  class=""
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mountainviewphoto.com%2Fwp-content%2Fuploads%2F2015%2F12%2Fheadshots-slide.jpg&f=1&nofb=1"
                  alt=""
                />
                <figcaption>
                  <h2 class="has-text-weight-bold is-size-4">
                    {this.state.data.name}
                  </h2>
                  <h3 class="subtitle">{this.state.data.about.job_title}</h3>
                </figcaption>
              </figure>
            </div>
            <div class="columns">
              <div class="column is-4"></div>
              <div class="column is-full">
                <h2 class="title has-text-dark"> Expertise </h2>
                {this.state.data.about.expertise.map((item) => (
                  <div class="columns">
                    <div class="column">
                      {/* <img src={item.imageLink ?? ""} alt="" /> */}
                      <h2 class="has-text-black is-size-5">{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="columns margin-top">
            <div class="column">
              <div class="columns">
                <div class="column is-4"></div>
                <div class="column">
                  <h2 class="title has-text-dark"> Expertise </h2>
                  {/* Could make this a component */}
                  <p> My Goal summary</p>
                </div>
              </div>
            </div>
            <div class="column is-1"> </div>
            <div class="column">
              <div class="columns">
                <div class="column">
                  <h2 class="title has-text-dark"> Skills </h2>
                  {/* Could make this a component */}
                  {this.state.data.about.skills.map((item) => (
                    <div class="columns">
                      <div class="column">
                        <h2 class="has-text-black is-size-5">{item.title}</h2>
                        <span>{item.proficiency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <div class="column is-1"> </div> */}
          </div>
        </motion.div>
      );
    }
  }
}

export default AboutMe;
