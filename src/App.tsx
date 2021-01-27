import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./layouts/Header";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <h2>Login</h2>
        </Route>
        <Route path="/register">
          <h2>Register</h2>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
