import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            // <section class="hero is-large">
            //     <div class="hero-foot">
            //     <h1 class="title text-center">
            //         Follow us on :
            //     </h1>
            //     </div>
            // </section>

            <section class="hero is-dark is-medium">
            <div class="hero-body">
              <div class="container">
                <h1 class="title text-center">
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

export default Social;