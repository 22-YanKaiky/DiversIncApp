import React from "react";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import About from './pages/About/About';
import Questions from "./pages/Questions/Questions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/about" exact component={About} />
        <Route path="/questions" exact component={Questions} />
      </Switch>
    </Router>
  )
}
