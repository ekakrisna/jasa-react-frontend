import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Homepage from "../pages/Homepage";

export default function router({ login }) {
  return (
    <>
      {login ? (
        <Router>
          <Switch>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/" component={Homepage}></Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/" component={Homepage}></Route>
          </Switch>
        </Router>
      )}
    </>
  );
}
