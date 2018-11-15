import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withAuthContext } from '../contexts/AuthContext'

const Protectedroute = ({ token, component }) => {
  return token ? <Route component={component} /> : <Redirect to="/login" />
}

export default withAuthContext(Protectedroute)
