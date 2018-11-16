import React, { Component } from 'react'
import { withAuthContext } from '../contexts/AuthContext'
import { withAnimationContext } from '../contexts/AnimateContext'
import { withNavContext } from '../contexts/NavContext'
import Uploader from '../dashBoard/Uploader'
import styled from 'styled-components'

const SideNav = styled.div`
  height: 50vh;
  position: absolute;
  top: 50%;
  left: ${props => (props.displaySide ? '0' : '-15vw')};
  transform: translate(0, -50%);
  background-color: #252525;
  transition: all 0.3s ease;
  display: flex;
  color: #f8f7f2;
  z-index: 3000;
  & .sideNavContent {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 15vw;
    font-size: 0.8em;
    text-align: center;
    height: 100%;
    & button {
      width: 100px;
      height: 25px;
      background-color: #07b6e7;
      color: #fff;
    }
  }
  & button {
    height: 100%;
    width: 25px;
    background-color: #f8f7f2;
    border: none;
    text-align: center;
  }
`

class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectName: '',
      fileName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    console.log(...this.state)
  }

  handleLogOut = () => {
    this.props.handleDisplaySide()
    setTimeout(() => this.props.animateLogOut(), 300)
    setTimeout(() => this.props.logout(), 1300)
  }

  render() {
    return (
      <SideNav displaySide={this.props.displaySide}>
        <div className="sideNavContent">
          <div className="sideNavHeader">
            <h1>
              {this.props.user.firstName}
              's Creation
            </h1>
            <button onClick={() => this.handleLogOut()}>LogOut</button>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="projectName"
              id="projectName"
              value={this.state.projectName}
              onChange={this.handleChange}
              placeholder="Project Name"
            />
          </form>
          <Uploader />
          <button>Save</button>
        </div>
        <button onClick={() => this.props.handleDisplaySide()}>{this.props.displaySide ? 'x' : '-'}</button>
      </SideNav>
    )
  }
}

export default withAuthContext(withAnimationContext(withNavContext(SideBar)))
