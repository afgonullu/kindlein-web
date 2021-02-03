import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import Header from "../layouts/Header";
import ChildFeed from "./ChildFeed";
import Profile from "./Profile";

const Home: React.FC = () => {
  return (
    <Container className="glassEffect">
      <Row>
        <Col md={1} xl={2} className="glassEffect">
          <Header />
        </Col>
        <Col md={11} xl={10}>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/children/:childId">
              <ChildFeed />
            </Route>
            <Route path="/moments/:momentId">
              <h3>Moment Details Page</h3>
            </Route>
            <Route path="/">
              <h3>Main Feed</h3>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
