import React, { useState, useEffect } from "react";
var ProgressBar = require('progressbar.js');
// import { Frame } from 'framer';

export default function Progress({ progress }) {
	// let [value, setValue] = useState(0);
	// useEffect(() => {
	//     while(value < progress){
	//         setTimeout(() => {
	//             setValue(++value)
	//         }, 100)
	//     }
	// })
	// function handleValue() {
	// 	while (value < progress) {
	// 		setTimeout(() => {
	// 			setValue(++value);
	// 		}, 100);
	// 	}
    // }
	// setValue(){
	//     while(value < progress) {
	//         setTimeout(() => value++, 500)

	//     }
	// }
	
	let bar = new ProgressBar.Line('#progress', {easing: 'easeInOut'});
	bar.animate(1);
	return (
		<div>
		</div>
	);
}
