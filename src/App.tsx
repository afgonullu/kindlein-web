import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import "./App.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyRoute from "./components/MyRoute";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <MyRoute path="/login">
            <Login />
          </MyRoute>
          <MyRoute path="/register">
            <Register />
          </MyRoute>
          <MyRoute path="/">
            <Home />
          </MyRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
