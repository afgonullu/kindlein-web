import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./layouts/Header";
import Home from "./pages/Home";

import "./App.scss";
import { AuthProvider } from "./context/auth";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <h2>Register</h2>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
