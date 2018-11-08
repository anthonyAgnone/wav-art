import React from 'react';
import { Link } from 'react-router-dom';
import { withNavContext } from '../contexts/NavContext';

function TopNavigation({ handleChangeSideNav, handleChangeTopNav }) {
	return (
		<nav className="topNav">
			<Link onClick={handleChangeTopNav} to="/">
				Home
			</Link>
			<div className="brand">
				<h1>
					<span>Wav</span> Art
				</h1>
			</div>
			<Link onClick={handleChangeTopNav} to="/how-to-use">
				How To Use
			</Link>
		</nav>
	);
}

export default withNavContext(TopNavigation);
