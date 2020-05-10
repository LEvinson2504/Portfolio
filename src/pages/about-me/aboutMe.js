import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
        <>
            <div class="columns is-variable is-8">
            <div class="column is-one-third">
                <figure class="image is-fullwidth">
                <img class="is-rounded" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mountainviewphoto.com%2Fwp-content%2Fuploads%2F2015%2F12%2Fheadshots-slide.jpg&f=1&nofb=1"/>
                </figure>
            </div>
            <div class="columns">
                <div class="column">
                <h2 class="title has-text-dark text-left"> Expertise </h2>
                {/* Could make this a component */}
                <h3 class="subtitle has-text-black"> Lorem Ipsum </h3> 
                <h4 class="subtitle has-text-black"> Lorem Ipsum </h4> 

                <h3 class="subtitle has-text-black"> Lorem Ipsum </h3> 
                <h4 class="subtitle has-text-black"> Lorem Ipsum </h4>
                </div>
            </div>
            </div>
            <div class="columns">
                <div class="column">  
                <div class="columns">
                    <div class="column">
                    <h2 class="title has-text-dark text-left"> Expertise </h2>
                    {/* Could make this a component */}
                    <h3 class="subtitle has-text-black"> Lorem Ipsum </h3> 
                    <h4 class="subtitle has-text-black"> Lorem Ipsum </h4> 

                    <h3 class="subtitle has-text-black"> Lorem Ipsum </h3> 
                    <h4 class="subtitle has-text-black"> Lorem Ipsum </h4>
                    </div>
                </div>
            </div>
                <div class="column">
                <div class="columns">
                    <div class="column">
                    <h2 class="title has-text-dark text-left"> Expertise </h2>
                    {/* Could make this a component */}
                    <h3 class="subtitle has-text-black"> Lorem Ipsum </h3> 
                    <h4 class="subtitle has-text-black"> Lorem Ipsum </h4> 

                    <h3 class="subtitle has-text-black"> Lorem Ipsum </h3> 
                    <h4 class="subtitle has-text-black"> Lorem Ipsum </h4>
                    </div>
                </div>
                </div>
            </div>
        </>
        );
    }
}

export default AboutMe;