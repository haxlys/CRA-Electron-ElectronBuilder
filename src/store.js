import { applyMiddleware, createStore, combineReducers } from "redux"
import { createLogger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import promiseMiddleware from "redux-promise-middleware"
import { routerMiddleware } from "react-router-redux"
import createHistory from "history/createBrowserHistory"

import * as reducers from "./reducers/index"

export const history = createHistory()

const rootReducers = combineReducers(reducers)

const myRouterMiddleware = routerMiddleware(history)

const promiseMiddlewared = promiseMiddleware({
  promiseTypeSuffixes: ["PENDING", "SUCCESS", "FAILURE"]
})

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(myRouterMiddleware, promiseMiddlewared)
  } else {
    return applyMiddleware(
      myRouterMiddleware,
      promiseMiddlewared,
      createLogger()
    )
  }
}

export const store = createStore(
  rootReducers,
  composeWithDevTools(getMiddleware())
)
