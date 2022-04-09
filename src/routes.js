import React from "react";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </Router>
  )
}