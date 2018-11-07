import React, { Component } from 'react';

import './assets/css/dashboard.css';

export default class DashBoard extends Component {
	componentDidMount() {}
	render() {
		return (
			<div>
				<canvas height={window.innerHeight - 20} width={window.innerWidth - 20} id="canvas" />
			</div>
		);
	}
}
