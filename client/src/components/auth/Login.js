import React from 'react';
import { withRouter } from 'react-router-dom';
import { withNavContext } from '../contexts/NavContext';

import './assets/css/login.css';
import background from './assets/img/background.jpeg';

import BoxSlider from '../utility/BoxSlider';

function Login({ isLeft }) {
	const style = {
		landing: {
			backgroundImage: `url(${background})`
		}
	};
	const boxStyle = {
		box: {
			transform: isLeft ? 'translateX(100%)' : 'translateX(0)'
		},
		form: {
			transform: isLeft ? 'translateX(0)' : 'translateX(100%)',
			width: '50%',
			height: '100%',
			position: 'absolute',
			top: '0',
			left: '0',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
		}
	};
	return (
		<div className="loginPage" style={style.landing}>
			<BoxSlider className="loginContent" style={boxStyle}>
				<h1>Login</h1>
			</BoxSlider>
			<form style={boxStyle.form}>
				<input type="text" />
				<input type="text" />
			</form>
		</div>
	);
}

export default withRouter(withNavContext(Login));
