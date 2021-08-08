// App.js file
import React, { Component } from "react";
import "./styles/masterstyle.css";

import Router from "./router/router";

export default class App extends Component {
  render() {
    const login = localStorage.getItem("isLoggedIn");
    return (
      <div className="App">
        <Router login={login} />
      </div>
    );
  }
}
