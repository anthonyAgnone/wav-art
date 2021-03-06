import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BoxSlider from '../utility/BoxSlider'
import { withNavContext } from '../contexts/NavContext'
import { withAuthContext } from '../contexts/AuthContext'
import { withAnimationContext } from '../contexts/AnimateContext'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      errorMessage: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  clearInputs = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      errorMessage: ''
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props
      .register(this.state)
      .then(() => {
        setTimeout(this.props.history.push('/dashboard'), 1000)
      })
      .catch(err => {
        this.setState({ errorMessage: err.response.data.message })
      })
  }

  render() {
    const { isLeft } = this.props
    const boxStyle = {
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff'
      }
    }
    return (
      <div className="registerPage">
        <BoxSlider className={isLeft ? 'boxSlider registerContentLeft' : 'boxSlider registerContentRight'}>
          <h1>Register</h1>
          <p>Get started making amazing art from the sounds important to you</p>
        </BoxSlider>

        <form style={boxStyle.form} onSubmit={this.handleSubmit}>
          <label htmlhtmlFor="firstName">First Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.firstName}
            name="firstName"
            type="firstName"
            id="firstName"
            placeholder="First Name"
          />
          <label htmlhtmlFor="lastName">Last Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.lastName}
            name="lastName"
            type="lastName"
            id="lastName"
            placeholder="Last Name"
          />
          <label htmlhtmlFor="userName">User Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            type="username"
            id="username"
            placeholder="Username"
          />
          <label htmlhtmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            type="email"
            id="email"
            placeholder="email"
          />
          <label htmlhtmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">Submit</button>
        </form>

        {this.state.errorMessage && (
          <p
            style={{
              color: 'red',
              position: 'absolute',
              bottom: '10vh',
              left: '25%',
              transform: 'translate(-50%, -50%)'
            }}>
            {this.state.errorMessage}
          </p>
        )}
      </div>
    )
  }
}

export default withAnimationContext(withAuthContext(withRouter(withNavContext(Register))))
