import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Hooks from "./components/Hooks";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact to="/" component={Home} /> */}
        <Route exact to="/hooks" component={Hooks} />
      </Switch>
    </div>
  );
}

export default App;
