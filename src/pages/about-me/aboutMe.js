import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <section class="hero is-dark is-medium">
            <div class="hero-body">
              <div class="container">
                <h1 class="title is-size-3 text-center">
                      Follow me on: &nbsp;
                      <i class="fab fa-instagram"></i> &nbsp;
                      <i class="fab fa-facebook-f"></i> &nbsp;
                      <i class="fab fa-github"></i>
                </h1>
              </div>
            </div>
          </section>
        );
    }
}

export default AboutMe;