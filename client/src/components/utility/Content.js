import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from '../landingPage/LandingPage'
import DashBoard from '../dashBoard/DashBoard'
import HowTo from '../howTo/HowTo'
import PrintView from '../printView/PrintView'
import Login from '../auth/Login'
import Register from '../auth/Register'

import background from './assets/img/background.jpeg'

import './assets/css/content.css'

function Content({ location }) {
  const style = {
    content: {
      backgroundImage: `url(${background})`
    }
  }
  return (
    <div className="content" style={style.content}>
      <TransitionGroup component={null}>
        <CSSTransition in={true} appear={false} key={location.key} classNames="page-slide" timeout={300}>
          <Switch location={location}>
            <Route path="/" exact component={LandingPage} />
            <Route path="/how-to-use" component={HowTo} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/preview" component={PrintView} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(Content)
