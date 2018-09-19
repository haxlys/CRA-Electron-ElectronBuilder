import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import App from "screens/App";
import Charts from "screens/App/screens/Charts";
import Albums from "screens/App/screens/Albums";

export const APP = {
  name: "App",
  path: "/",
  component: App
};

export const CHARTS = {
  name: "Charts",
  path: "/charts",
  component: Charts
};

export const ALBUMS = {
  name: "Albums",
  path: "/albums",
  component: Albums
};

// object일 경우 해당 레벨 화면이며 배열일 경우 하위 화면에 해당
const routes = [APP, [CHART, ALBUMS]];

routes.map(route => {});

const Routes = () => (
  <Route name={APP} path={APP.path} component={APP.component} exact>
    <Fragment>
      <Route name="Admin">
        <Fragment>
          <Route name="Users" />
          <Route name="Reports" />
        </Fragment>
      </Route>
      <Route name="Course">
        <Route name="Assignments" />
      </Route>
      <Route name="Charts" path="chart" component={Charts} />
    </Fragment>
  </Route>
);

export default Routes;
