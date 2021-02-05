import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import Header from "../layouts/Header";
import Feed from "./Feed";
import Profile from "./Profile";
import SingleMoment from "./SingleMoment";

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
              <Feed />
            </Route>
            <Route path="/moments/:momentId">
              <SingleMoment />
            </Route>
            <Route path="/">
              <Feed />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
