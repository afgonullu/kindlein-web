import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import "./App.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
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
