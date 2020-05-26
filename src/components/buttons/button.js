import React from "react";
import { motion } from "framer-motion";

const button = (props) => {
  return (
    <motion.a
      class={props.buttonStyle ?? "button is-dark"}
      style={{ textDecoration: "none" }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      href={props.buttonLink ?? "/"}
    >
      <span class="icon is-small">
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </span>
      <span>{props.buttonName ?? "Button"}</span>
    </motion.a>
  );
};

export default button;
