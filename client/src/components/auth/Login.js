import React from 'react'
import { withRouter } from 'react-router-dom'
import BoxSlider from '../utility/BoxSlider'
import { withNavContext } from '../contexts/NavContext'

function Login({ isLeft }) {
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
      <form style={boxStyle.form}>
        <label for="email">Email</label>
        <input name="email" type="email" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(withNavContext(Login))
