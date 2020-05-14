import React from "react";
import Button from "../buttons/button.js";

const ProjectTile = (props) => {
	return (
		<article class={`tile is-parent ${props.tileSize ?? ""}`}>
			<article class="tile is-child box">
				<figure class={`image ${props.imageStyle ?? "is-16by9"}`}>
					<img
						src={`${
							props.imageLink ??
							"http://loremflickr.com/480/272/default"
						}`}
						alt="button"
					/>
				</figure>
				<h1 class="title">{props.title ?? "Title"}</h1>
				<h2 class="subtitle">{props.subtitle ?? "Subtitle"}</h2>
				<div class="buttons">
					<Button
						buttonName="Check it out on Github"
						buttonStyle="button is-link is-fullwidth"
						buttonLink={props.link}
					/>
				</div>
			</article>
		</article>
	);
};

export default ProjectTile;
