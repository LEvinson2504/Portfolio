import React, { useState, useEffect } from "react";
// import { Frame } from 'framer';

export default function Progress({ progress }) {
	let [value, setValue] = useState(0);
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

	return (
		<progress
			class="progress is-primary"
			value={value}
			max={100}
		></progress>
	);
}
