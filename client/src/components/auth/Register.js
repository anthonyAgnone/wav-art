import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BoxSlider from '../utility/BoxSlider'
import { withNavContext } from '../contexts/NavContext'
import { withAuthContext } from '../contexts/AuthContext'


class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      errorMessage: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  clearInputs = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      errorMessage: ""
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state)
      .then(() => this.props.history.push("/"))
      .catch(err => {
        this.setState({ errorMessage: err.response.data.message })
      })
  }

  render() {
    const { isLeft } = this.props
    const boxStyle = {
      box: {
        transform: isLeft ? 'translateX(100%)' : 'translateX(0)'
      },
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
        
        <BoxSlider className="boxSlider regContent" style={boxStyle}>
          <h1>Register</h1>
          <p>Get started making amazing art from the sounds important to you</p>
        </BoxSlider>import Register from './Register';

        <form style={boxStyle.form} onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.firstName}
            name="firstName"
            type="firstName"
            id="firstName"
            placeholder="First Name" />
          <input
            onChange={this.handleChange}
            value={this.state.lastName}
            name="lastName"
            type="lastName"
            id="lastName"
            placeholder="Last Name" />
          <input
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            type="username"
            id="username"
            placeholder="Username" />
          <input
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            type="email"
            id="email"
            placeholder="email" />
          <input
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password"
            id="password"
            placeholder="password" />
          <button type="submit">Submit</button>
        </form>

        {
          this.state.errorMessage &&
          <p style={{ color: "red" }}>{this.state.errorMessage}</p>
        }

      </div>
    )
  }
}

export default withAuthContext(withRouter(withNavContext(Register)))
