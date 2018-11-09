import React from 'react'

import Header from './components/navigation/Header'
import Content from './components/utility/Content'

export default function App({ location }) {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  )
}
