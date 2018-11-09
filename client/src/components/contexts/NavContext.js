import React, { Component, createContext } from 'react';
import { withRouter } from 'react-router-dom';

const { Consumer, Provider } = createContext();

class NavContext extends Component {
	constructor(props) {
		super(props);
		const { location, match } = props;
		console.log(match, location);
		this.state = {
			navState: 0,
			isRegister: false,
			isLeft: true
		};
		this.handleChangeSideNav = this.handleChangeSideNav.bind(this);
		this.handleChangeTopNav = this.handleChangeTopNav.bind(this);
		this.handleIsRegister = this.handleIsRegister.bind(this);
		this.handleIsLogin = this.handleIsLogin.bind(this);
		this.handleIsLeft = this.handleIsLeft.bind(this);
	}

	static getDerivedStateFromProps({ location: { pathname } }, prevState) {
		switch (pathname) {
			case '/':
				return { isLeft: true };
			case '/how-to-use':
				return { isLeft: false };
			default:
				return prevState;
		}
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

	handleIsRegister() {
		this.setState({
			isRegister: true
		});
	}

	handleIsLogin() {
		this.setState({
			isRegister: false
		});
	}

	handleIsLeft() {
		this.setState(prevState => ({
			isLeft: !prevState.isLeft
		}));
	}

	render() {
		const value = {
			...this.state,
			handleChangeSideNav: this.handleChangeSideNav,
			handleChangeTopNav: this.handleChangeTopNav,
			handleIsLeft: this.handleIsLeft
		};
		return <Provider value={value}>{this.props.children}</Provider>;
	}
}

export default withRouter(NavContext);

export const withNavContext = C => props => (
	<Consumer>{value => <C {...value} {...props} />}</Consumer>
);
