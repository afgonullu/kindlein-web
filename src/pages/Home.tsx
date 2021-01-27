import React from "react";
import { Route, Switch } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/profile">
          <h3>User Profile</h3>
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
