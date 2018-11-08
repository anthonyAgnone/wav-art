import React, { Component, createContext } from 'react';
const { Consumer, Provider } = createContext();

export default class NavContext extends Component {
	constructor(props) {
		super(props);

		this.state = {
			navState: 0
		};
		this.handleChangeSideNav = this.handleChangeSideNav.bind(this);
		this.handleChangeTopNav = this.handleChangeTopNav.bind(this);
	}

	handleChangeSideNav() {
		this.setState({
			navState: 1
		});
	}

	handleChangeTopNav() {
		this.setState({
			navState: 0
		});
	}

	render() {
		const value = {
			...this.state,
			handleChangeSideNav: this.handleChangeSideNav,
			handleChangeTopNav: this.handleChangeTopNav
		};
		return <Provider value={value}>{this.props.children}</Provider>;
	}
}
export const withNavContext = C => props => (
	<Consumer>{value => <C {...value} {...props} />}</Consumer>
);
