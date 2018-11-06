import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/nav.css';

export default class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 0
		};
	}

	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/how-to-use">How To Use</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/preview">Preview</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
