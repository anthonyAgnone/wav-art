import React from 'react';
import './assets/css/landingPage.css';
import background from './assets/img/background.jpeg';
export default function LandingPage() {
	const style = {
		landing: {
			backgroundImage: `url(${background})`
		}
	};
	return (
		<div className="landingPage" style={style.landing}>
			<div className="lpContent">
				<h1>Tag Line Slogan</h1>
				<p>Description of what it does, who should use it, why they should use it.</p>
			</div>
		</div>
	);
}
