import React from 'react';

import Typewriter from "typewriter-effect";

function AutoWriter() {
	return (
		<div>
			<Typewriter
				onInit={(typewriter) => {
					typewriter
						.typeString("Ask Your Question!")
						.pauseFor(1000)
						.deleteAll()
						.typeString("Let's Discuss")
						.start();
				}}
			/>
		</div>
	);
}

export default AutoWriter;
