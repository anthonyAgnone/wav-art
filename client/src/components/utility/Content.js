import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Switch, Route, withRouter } from 'react-router-dom'
import Protectedroute from '../auth/Protectedroute'
import { withNavContext } from '../contexts/NavContext'
import { withAnimationContext } from '../contexts/AnimateContext'
import { withAuthContext } from '../contexts/AuthContext'
import LandingPage from '../landingPage/LandingPage'
import DashBoard from '../dashBoard/DashBoard'
import HowTo from '../howTo/HowTo'
import Login from '../auth/Login'
import Register from '../auth/Register'

import background from './assets/img/background.jpeg'

import styled from 'styled-components'

class Content extends Component {
  Container = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    border-color: #252525;
    border-style: solid;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${background});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    & .howToPage,
    .loginPage,
    .registerPage {
      height: 100%;
      width: 100%;
    }
    & .page-enter.landingPage .lpContent {
      transform: translate(200%, 0);
    }

    & .page-enter-active.landingPage .lpContent {
      transform: translate(0, 0);
    }
    & .page-exit.landingPage .lpContent {
      transform: translate(0, 0);
    }
    & .page-exit-active.landingPage .lpContent {
      transform: translate(200%, 0);
    }

    & .howToPage.page-enter .htContent {
      transform: translate(-100%, 0);
    }

    & .howToPage.page-enter-active .htContent {
      transform: translate(100%, 0);
    }
    & .howToPage.page-exit .htContent {
      transform: translate(100%, 0);
    }
    & .howToPage.page-exit-active .htContent {
      transform: translate(-100%, 0);
    }

    & .loginPage.page-enter .loginContentLeft {
      transform: translate(-100%, 0);
    }

    & .loginPage.page-enter-active .loginContentLeft {
      transform: translate(100%, 0);
    }
    & .loginPage.page-exit .loginContentLeft {
      transform: translate(100%, 0);
    }
    & .loginPage.page-exit-active .loginContentLeft {
      transform: translate(-100%, 0);
    }
    & .loginPage.page-enter .loginContentRight {
      transform: translate(200%, 0);
    }

    & .loginPage.page-enter-active .loginContentRight {
      transform: translate(0, 0);
    }
    & .loginPage.page-exit .loginContentRight {
      transform: translate(0, 0);
    }
    & .loginPage.page-exit-active .loginContentRight {
      transform: translate(200%, 0);
    }

    & .loginPage .loginContentRight {
      transform: translate(0, 0);
    }

    & .registerPage.page-enter .registerContentLeft {
      transform: translate(-100%, 0);
    }

    & .registerPage.page-enter-active .registerContentLeft {
      transform: translate(100%, 0);
    }
    & .registerPage.page-exit .registerContentLeft {
      transform: translate(100%, 0);
    }
    & .registerPage.page-exit-active .registerContentLeft {
      transform: translate(-100%, 0);
    }
    & .registerPage.page-enter .registerContentRight {
      transform: translate(200%, 0);
    }

    & .registerPage.page-enter-active .registerContentRight {
      transform: translate(0, 0);
    }
    & .registerPage.page-exit .registerContentRight {
      transform: translate(0, 0);
    }
    & .registerPage.page-exit-active .registerContentRight {
      transform: translate(200%, 0);
    }

    & .registerPage .registerContentRight {
      transform: translate(0, 0);
    }
  `
  componentDidMount = () => {
    this.props.animateLogOut()
  }

  render() {
    const Container = this.Container
    return (
      <Container isLoggedIn={this.props.token} className="content" ref={this.props.mainSection}>
        <TransitionGroup component={null}>
          <CSSTransition
            in={true}
            appear={false}
            key={this.props.location.key}
            classNames="page"
            timeout={{
              enter: 300,
              exit: 300
            }}>
            <Switch location={this.props.location}>
              <Route path="/" exact component={LandingPage} />
              <Route path="/how-to-use" component={HowTo} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Protectedroute path="/dashboard" component={DashBoard} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Container>
    )
  }
}
export default withRouter(withAuthContext(withAnimationContext(withNavContext(Content))))
