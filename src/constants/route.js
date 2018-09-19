import React from "react"
import { Route } from "react-router-dom"

import App from "screens/App"
import Charts from "screens/App/screens/Charts"
import Albums from "screens/App/screens/Albums"

export const APP = {
  name: "App",
  path: "/",
  component: App
}

export const CHARTS = {
  name: "Charts",
  path: "/charts",
  component: Charts
}

export const ALBUMS = {
  name: "Albums",
  path: "/albums",
  component: Albums
}

// object일 경우 해당 레벨 화면이며 배열일 경우 하위 화면에 해당
const routes = [APP, [CHARTS, ALBUMS]]

const Routes = () => (
  <div>
    <Route exct name={APP} path={APP.path} component={APP.component} />
    <Route name="Charts" path="/charts" component={Charts} />
    <Route name="Albums" path="/albums" component={Albums} />
  </div>
)

const routesObject = {
  home: {
    type: ["top"],
    path: "/",
    exact: true,
    // component: Home,
    text: "메인"
  },
  charts: {
    type: ["top"],
    path: "/charts",
    exact: false,
    // component: Chart,
    text: "인기차트"
  }
}

// 배열 형태
export const routesOfArray = () =>
  Object.keys(routesObject).map(key => routesObject[key])

// 메뉴 타입에 해당하는 route만
export const routesOfType = menuType =>
  routes().filter(route => route.type.indexOf(menuType) > -1)

export default Routes
