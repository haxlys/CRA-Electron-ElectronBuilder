import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import Root from "./Root";

ReactDOM.render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./Root", () => {
    const NextRoot = require("./Root") // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextRoot />
      </AppContainer>, document.getElementById("root"))
  })
}
