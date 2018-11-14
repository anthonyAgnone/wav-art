import React, { Component } from 'react';

import './assets/css/dashboard.css';
import Canvas from "./Canvas";
import AudioPlayer from "./AudioPlayer";
import CanvasContextProvider from "../contexts/CanvasContext";
import Uploader from './Uploader';


export default class DashBoard extends Component {


	render() {
		return (
			<CanvasContextProvider>
				<div>
					<Uploader />
					<Canvas/>
					<AudioPlayer />
				</div>
			</CanvasContextProvider>
		);
	}
}

