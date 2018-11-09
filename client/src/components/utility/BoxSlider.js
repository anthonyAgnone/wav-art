import React from 'react';

function BoxSlider({ className, children, style = {} }) {
	return (
		<div style={style.box} className={className}>
			{children}
		</div>
	);
}

export default BoxSlider;
