import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'

const { Consumer, Provider } = createContext()

class NavContext extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLeft: true
    }
  }

  static getDerivedStateFromProps(
    {
      location: { pathname }
    },
    prevState
  ) {
    switch (pathname) {
      case '/':
        return { isLeft: true }
      case '/how-to-use':
        return { isLeft: false }
      default:
        return prevState
    }
  }

  render() {
    const value = {
      ...this.state
    }
    return <Provider value={value}>{this.props.children}</Provider>
  }
}

export default withRouter(NavContext)

export const withNavContext = C => props => <Consumer>{value => <C {...value} {...props} />}</Consumer>
