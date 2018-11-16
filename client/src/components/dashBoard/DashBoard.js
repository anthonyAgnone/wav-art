import React, { Component } from 'react'

import './assets/css/dashboard.css'
import Canvas from './Canvas'
import AudioPlayer from './AudioPlayer'
import CanvasContextProvider from '../contexts/CanvasContext'
import SideBar from '../navigation/SideBar'
import { withAuthContext } from '../contexts/AuthContext'
import { withAnimationContext } from '../contexts/AnimateContext'

class DashBoard extends Component {
  render() {
    return (
      <CanvasContextProvider>
        <div>
          <SideBar />
          <Canvas />
          <AudioPlayer />
        </div>
      </CanvasContextProvider>
    )
  }
}

export default withAuthContext(withAnimationContext(DashBoard))
