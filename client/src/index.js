import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NavContext from './components/contexts/NavContext'
import Reboot from './components/utility/Reboot'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <Reboot>
      <NavContext>
        <App />
      </NavContext>
    </Reboot>
  </BrowserRouter>,

  document.getElementById('root')
)
