import React, { Component } from "react";
import '../../index';
import data from '../../components/data/data.json';

class AboutMe extends Component {
  render() {
    return (
      <>
        <div class="columns">
          <div class="column is-2"></div>
          <div class="column is-one-third">
            <figure class="image is-fullwidth">
              <img
                class=""
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mountainviewphoto.com%2Fwp-content%2Fuploads%2F2015%2F12%2Fheadshots-slide.jpg&f=1&nofb=1"
                alt = ""
              />
              <figcaption>
                <h2 class="has-text-weight-bold is-size-4">Name Surname</h2>
                <h3 class="subtitle"> Profession </h3>
              </figcaption>
            </figure>
          </div>
          <div class="columns">
            <div class="column is-5"></div>
            <div class="column is-full">
              <h2 class="title has-text-dark"> Expertise </h2>
              {/* Could make this a component */}
              <div class="columns">
                <div class="column">
                  <h2 class="has-text-black is-size-5"> Lorem Ipsum </h2>
                  <p>details</p>
                  <h2 class="has-text-black is-size-5"> Lorem Ipsum </h2>
                  <p>details</p>
                </div>
                <div class="column">
                  <h2 class="has-text-black is-size-5"> Lorem Ipsum </h2>
                  <p>details</p>
                  <h2 class="has-text-black is-size-5"> Lorem Ipsum </h2>
                  <p>details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
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
                <figure class="image is-fullwidth">
              <img
                class=""
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.entrepreneur.com%2Fstatic%2F1424379715-skills-to-succeed-chart.jpg&f=1&nofb=1"
                alt = ""
              />
            </figure>
              </div>
            </div>
          </div>
          <div class="column is-1"> </div>
        </div>
      </>
    );
  }
}

export default AboutMe;
