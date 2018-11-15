import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BoxSlider from '../utility/BoxSlider'
import { withNavContext } from '../contexts/NavContext'
import { withAuthContext } from '../contexts/AuthContext'
import { withAnimationContext } from '../contexts/AnimateContext'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
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
      username: '',
      password: '',
      errorMessage: ''
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props
      .login(this.state)
      .then(() => {
        this.props.history.push('/dashboard')
        this.props.animateToDashBoard()
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
      <div className="loginPage">
        <BoxSlider className={isLeft ? 'boxSlider loginContentLeft' : 'boxSlider loginContentRight'}>
          <h1>Login</h1>
          <p>Login with email and password</p>
        </BoxSlider>
        <form style={boxStyle.form} onSubmit={this.handleSubmit}>
          <label for="email">Email</label>
          <input onChange={this.handleChange} value={this.state.email} name="email" type="email" placeholder="email" />
          <label for="password">Password</label>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password"
            placeholder="password"
          />
          <button type="submit">Submit</button>
        </form>

        {this.state.errorMessage && (
          <p
            style={{
              color: 'red',
              position: 'absolute',
              bottom: '15vh',
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

export default withAnimationContext(withAuthContext(withRouter(withNavContext(Login))))
