import React, { Component, createContext, createRef } from 'react'
import { TimelineMax, Power1 } from 'gsap'

const { Consumer, Provider } = createContext()

export default class AnimationContext extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDashBoardAnimation: false
    }
    this.navBarAnimation = null
    this.mainSectionAnimation = null
    this.navBar = createRef()
    this.mainSection = createRef()
    this.animateToDashBoard = this.animateToDashBoard.bind(this)
  }

  animateToDashBoard() {
    this.navBarAnimation = new TimelineMax()
    this.mainSectionAnimation = new TimelineMax()
    this.navBarAnimation.to(this.navBar.current, 0.4, { y: -100, ease: Power1.easeInOut }, 'nav')
    this.mainSectionAnimation.to(
      this.mainSection.current,
      1.3,
      { css: { borderWidth: '2vw' }, delay: 0.2, ease: Power1.easeInOut },
      'main'
    )
  }

  render() {
    const value = {
      animateToDashBoard: this.animateToDashBoard,
      navBar: this.navBar,
      mainSection: this.mainSection,
      ...this.state
    }
    return <Provider value={value}>{this.props.children}</Provider>
  }
}

export const withAnimationContext = C => props => <Consumer>{value => <C {...value} {...props} />}</Consumer>
