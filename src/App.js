import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import logo from "./assets/logo.svg";
import "css/App.css";
import Routes from "constants/route";

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/charts">charts</Link>
          </li>
          <li>
            <Link to="/albums">albums</Link>
          </li>
        </ul>

        <Routes />
      </div>
  }
}

const Home = () => <div>home~</div>;
const About = () => <div>About~</div>;
const Topics = () => <div>Topics~</div>;

export default App;
