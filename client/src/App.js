import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/navigation/Header';
import LandingPage from './components/landingPage/LandingPage';
import DashBoard from './components/dashBoard/DashBoard';
import HowTo from './components/howTo/HowTo';
import PrintView from './components/printView/PrintView';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import './components/utility/assets/css/app.css';

function App({ location }) {
	return (
		<div className="app">
			<Header />
			<div className="content">
				<TransitionGroup component={null}>
					<CSSTransition
						in={true}
						appear={false}
						key={location.key}
						classNames="page-slide"
						timeout={300}
					>
						<Switch location={location}>
							<Route path="/" exact component={LandingPage} />
							<Route path="/how-to-use" component={HowTo} />
							<Route path="/dashboard" component={DashBoard} />
							<Route path="/preview" component={PrintView} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>
		</div>
	);
}

export default withRouter(App);
