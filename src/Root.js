import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter, Switch, Route } from "react-router-redux"

import { store, history } from "./store"


import "./css/index.css"
import App from "./App"

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)