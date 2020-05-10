import React from 'react';
import Button from '../buttons/button.js';

const ProjectTile = (props) => {
    return (
        <article class={"tile is-parent " + `${props.tileSize}`}>
            <article class="tile is-child box">
                <figure class={"image " + `${props.imageStyle ?? 'is-fullwidth'}` }>
                    <img src={"http://loremflickr.com/300/300/" + `${props.imageLink ?? 'office'}`} class="is-rounded" alt="button" />
                </figure>
                <h1 class="title">{props.title ?? 'Title'}</h1>
                <h2 class="subtitle">{props.subtitle ?? 'Subtitle'}</h2>
                <div class="buttons">
                    <Button
                        buttonName="Read More..."
                        buttonStyle="button is-link is-fullwidth"
                        buttonLink={props.buttonLink}
                    />
                </div>
            </article>
        </article>
    );
};

export default ProjectTile;
