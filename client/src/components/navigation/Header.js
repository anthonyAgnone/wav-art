import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

import './assets/css/header.css';
import { withAnimationContext } from '../contexts/AnimateContext';

function Header({navBar}) {
	return (
		<div className="header" ref={navBar}>
			<form>
				<input type="text" />
				<button>Search</button>
			</form>
			<Navigation />
			<div className="buttons">
				<Link className="login" to="/login">
					Login
				</Link>
				<Link className="register" to="/register">
					Register
				</Link>
			</div>
		</div>
	);
}

export default withAnimationContext(Header)