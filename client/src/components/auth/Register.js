import React from 'react'
import { withRouter } from 'react-router-dom'
import BoxSlider from '../utility/BoxSlider'
import { withNavContext } from '../contexts/NavContext'

function Register({ isLeft }) {
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
        <p>Get started making beautiful art from the sounds important to you.</p>
      </BoxSlider>
      <form style={boxStyle.form}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="LastName" />
        <label htmlFor="userName">User Name</label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(withNavContext(Register))
