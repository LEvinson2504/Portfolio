import * as React from 'react';
import { useIntersection } from 'react-use';
// import "../../../src/index"

//could make a default parameter to define the width
export var ProgressBar = ({ percent }) => {

	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 1
	});

	return (
		<div ref={intersectionRef}>
			{intersection && intersection.intersectionRatio < 1
				? (<div>
					<div className="progress-div" style={{ width: `100%` }}>
						<div style={{ width: `0%` }} className="progress" />
					</div>
				</div>)
				: (<div>
					<div className="progress-div" style={{ width: `100%` }}>
						<div style={{ width: `${percent}%` }} className="progress" />
					</div>
				</div>)}
		</div>
	);
};
export default ProgressBar;