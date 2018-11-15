import React, { Component } from 'react';
import { withNavContext } from '../contexts/NavContext';
import TopNavigation from './TopNavigation';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 0
		};
	}

	render() {
		return <TopNavigation />;
	}
}

export default withNavContext(Navigation);
