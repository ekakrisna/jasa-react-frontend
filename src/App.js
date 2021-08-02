// App.js file
import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class App extends Component {
  render() {
    let navLink = (
      <div className="Tab">
        <NavLink to="/login" activeClassName="activeLink" className="signIn">
          Login
        </NavLink>
        <NavLink exact to="/" activeClassName="activeLink" className="signUp">
          Sign Up
        </NavLink>
      </div>
    );
    const login = localStorage.getItem("isLoggedIn");
    return (
      <div className="App">
        {login ? (
          <Router>
            <Route exact path="/" component={SignUp}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
          </Router>
        ) : (
          <Router>
            {navLink}
            <Route exact path="/" component={SignUp}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
          </Router>
        )}
      </div>
    );
  }
}
