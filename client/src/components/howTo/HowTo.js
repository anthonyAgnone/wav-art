import React from 'react';
import './assets/css/howTo.css';
import background from './assets/img/background.jpeg';

export default function HowTo() {
	const style = {
		landing: {
			backgroundImage: `url(${background})`
		}
	};
	return (
		<div className="howToPage" style={style.landing}>
			<div className="htContent">
				<h1>How To Use</h1>
				<p>how to use the app</p>
			</div>
		</div>
	);
}
