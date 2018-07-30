import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
  , document.getElementById('root'))
registerServiceWorker()
