import React from "react";
import { Link } from "react-router-dom";

const NavButton = (props) => {
	return (
		<div class={`buttons ${props.buttonAlign ?? ''}`}>
			<Link
				to={`${props.buttonLink ?? "/"}`}
				class={`button ${props.buttonStyle ?? "is-primary is-rounded"}`}
				style={{ textDecoration: "none" }}
			>
				{props.buttonName ?? "Return to home page"}
			</Link>
		</div>
	);
};

export default NavButton;
