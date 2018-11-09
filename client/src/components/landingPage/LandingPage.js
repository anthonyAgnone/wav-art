import React from 'react';

import './assets/css/landingPage.css';
import background from './assets/img/background.jpeg';

import BoxSlider from '../utility/BoxSlider';
import { withNavContext } from '../contexts/NavContext';

function LandingPage({ isLeft }) {
	const style = {
		landing: {
			backgroundImage: `url(${background})`
		}
	};
	const boxStyle = {
		box: {
			transform: isLeft ? 'translateX(0)' : 'translateX(`100%)'
		}
	};
	return (
		<div className="landingPage" style={style.landing}>
			<BoxSlider className="lpContent" style={boxStyle}>
				<h1>Synthesize Sight and Sound</h1>
				<p>
					Create an artistic interpretation of anything from your child's first words to your
					favorite song.
				</p>
			</BoxSlider>
		</div>
	);
}

export default withNavContext(LandingPage);
