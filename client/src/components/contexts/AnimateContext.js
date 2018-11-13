import React, { Component, createContext, createRef } from 'react';
import { TimelineLite } from 'gsap';

const { Consumer, Provider } = createContext();

export default class AnimationContext extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toDashBoardAnimation: false
		};
		this.handleToDashboardAnimation = this.handleToDashboardAnimation.bind(this);
		this.toDashboard = new TimelineLite({ paused: true });
		this.navBar = createRef();
		this.mainSection = createRef();
	}

	handleToDashboardAnimation(control) {
		this.setState({
			toDashBoardAnimation: control
		});
	}

	animateToDashBoard() {}

	componentDidMount() {
		this.navBar.current.style.background = 'yellow';
	}

	render() {
		const value = {
			handleToDashboardAnimation: this.handleToDashboardAnimation,
			navBar: this.navBar,
			mainSection: this.mainSection,
			...this.state
		};
		return <Provider value={value}>{this.props.children}</Provider>;
	}
}

export const withAnimationContext = C => props => (
	<Consumer>{value => <C {...value} {...props} />}</Consumer>
);
