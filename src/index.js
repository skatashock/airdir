import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'))

serviceWorker.unregister()
