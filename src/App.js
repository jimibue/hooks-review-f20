import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Hooks from "./components/Hooks";
import Users from "./Users/Users";

function App() {
  return (
    <div className="App">
      <Link to="/">home</Link>
      <Link to="/hooks">hooks</Link>
      <Link to="/users">users</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hooks" component={Hooks} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </div>
  );
}

export default App;
