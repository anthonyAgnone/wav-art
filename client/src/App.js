import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/navigation/Header';
import LandingPage from './components/landingPage/LandingPage';
import DashBoard from './components/dashBoard/DashBoard';
import HowTo from './components/howTo/HowTo';
import PrintView from './components/printView/PrintView';

import './components/utility/assets/css/app.css';

export default function App() {
	return (
		<div className="app">
			<Header />
			<div className="content">
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/how-to-use" component={HowTo} />
					<Route path="/dashboard" component={DashBoard} />
					<Route path="/preview" component={PrintView} />
				</Switch>
			</div>
		</div>
	);
}
