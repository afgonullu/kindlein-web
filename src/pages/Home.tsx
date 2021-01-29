import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../layouts/Header";
import Profile from "../layouts/Profile";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/children/:childId">
          <h3>Child Specific Feed</h3>
        </Route>
        <Route path="/moments/:momentId">
          <h3>Moment Details Page</h3>
        </Route>
        <Route path="/">
          <h3>Main Feed</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
