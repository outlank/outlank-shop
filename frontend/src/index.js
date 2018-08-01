import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stroe'

import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Home from './pages/home'

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
  , document.getElementById('root'))
registerServiceWorker()
