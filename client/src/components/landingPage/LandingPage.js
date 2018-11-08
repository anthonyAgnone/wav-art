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
				<h1>Synthesize Sight and Sound</h1>
				<p>
					Create an artistic interpretation of anything from your child's first words to your
					favorite song.
				</p>
			</div>
		</div>
	);
}
