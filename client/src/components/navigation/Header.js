import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

import './assets/css/header.css'
import { withAnimationContext } from '../contexts/AnimateContext'
import { withAuthContext } from '../contexts/AuthContext'

import styled from 'styled-components'

const HeaderNav = styled.div`
  visibility: ${props => (props.isLoggedIn ? 'hidden' : 'visible')};
  width: 90vw;
  height: calc(10vh - 12px);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & form {
    display: flex;
    justify-content: space-between;
    width: 20vw;
    margin-right: 2em;
    & input {
      width: 60%;
      border-radius: 4px;
      border: 0;
      padding: 4px;
      background-color: #f8f7f2;
    }
    & button {
      max-width: 35%;
      margin-left: 1em;
      border: none;
      border-radius: 4px;
      padding: 0.3em 1.3em;
      background-color: #f8f7f2;
    }
  }
  & .buttons {
    width: 20vw;
    display: flex;
    justify-content: flex-end;
    & a {
      color: #2d3047;
      margin-left: 1em;
      border: none;
      border-radius: 4px;
      padding: 0.3em 1.3em;
      background-color: #f8f7f2;
    }
    & .register {
      background-color: #07b6e7;
      color: #fff;
      font-weight: 700;
      letter-spacing: 0.05em;
      border: none;
    }
  }
  & .topNav {
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    & h1 {
      font-size: 2em;
      color: #07b6e7;
      font-family: 'Pacifico', cursive;
      margin-top: 10px;

      & span {
        background: #07b6e7;
        color: #f8f7f2;
        padding: 0 0.3em;
      }
    }
    & a,
    button {
      color: #f8f7f2;
      font-size: 1.2em;
      font-weight: 700;
      margin: 0 1em;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`

function CustomLink({ to, from, children, ...props }) {
  const disable = to === from
  return disable ? (
    <button {...props}>{children}</button>
  ) : (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}

function Header({ navBar, token, logout }) {
  return (
    <HeaderNav isLoggedIn={token} className="header" ref={navBar}>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
      <Navigation />
      {token ? (
        <div className="buttons">
          <Link to="/" onClick={() => logout()}>
            Log Out
          </Link>{' '}
        </div>
      ) : (
        <div className="buttons">
          <CustomLink className="login" to="/login">
            Login
          </CustomLink>
          <CustomLink className="register" to="/register">
            Register
          </CustomLink>
        </div>
      )}
    </HeaderNav>
  )
}

export default withAuthContext(withAnimationContext(Header))
