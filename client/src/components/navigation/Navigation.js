import React, { Component } from 'react';
import { withNavContext } from '../contexts/NavContext';
import TopNavigation from './TopNavigation';
import SideNavigation from './SideNavigation';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 0
		};
	}

	render() {
		if (this.props.navState) return <SideNavigation />;
		else return <TopNavigation />;
	}
}

export default withNavContext(Navigation);
