import React from 'react';
import { Link } from 'react-router-dom';
import { withNavContext } from '../contexts/NavContext';

function TopNavigation({ handleChangeSideNav, handleChangeTopNav }) {
	return (
		<nav className="sideNav">
			<ul>
				<li>
					<Link onClick={handleChangeTopNav} to="/">
						Home
					</Link>
				</li>
				<li>
					<Link onClick={handleChangeTopNav} to="/how-to-use">
						How To Use
					</Link>
				</li>
				<li>
					<Link onClick={handleChangeSideNav} to="/dashboard">
						Dashboard
					</Link>
				</li>
				<li>
					<Link onClick={handleChangeSideNav} to="/preview">
						Preview
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default withNavContext(TopNavigation);
