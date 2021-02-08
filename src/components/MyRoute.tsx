import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthContext } from "../context/auth";

const MyRoute: React.FC<RouteProps> = ({ path, children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    if (path === "/login" || path === "/register") {
      return <Redirect to="/" />;
    }
    return <Route path={path}>{children}</Route>;
  }
  if (path === "/login" || path === "/register") {
    return <Route path={path}>{children}</Route>;
  }
  return <Redirect to="/login" />;
};

export default MyRoute;
