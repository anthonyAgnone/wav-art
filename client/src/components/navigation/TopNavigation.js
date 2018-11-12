import React from 'react'

import { Link, withRouter } from 'react-router-dom'

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

function TopNavigation({ location: { pathname } }) {
  return (
    <nav className="topNav">
      <CustomLink id="homeLink" to="/" from={pathname}>
        Home
      </CustomLink>
      <div className="brand">
        <h1>
          <span>Wav</span> Art
        </h1>
      </div>
      <CustomLink id="howToLink" to="/how-to-use" from={pathname}>
        How To Use
      </CustomLink>
    </nav>
  )
}

export default withRouter(TopNavigation)
