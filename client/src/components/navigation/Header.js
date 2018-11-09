import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

import './assets/css/header.css'

export default function Header() {
  return (
    <div className="header">
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
      <Navigation />
      <div className="buttons">
        <Link className="login" to="/login">
          Login
        </Link>
        <Link className="register" to="/register">
          Register
        </Link>
      </div>
    </div>
  )
}
