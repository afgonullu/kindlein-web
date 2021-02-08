import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Switch } from "react-router-dom";
import MyRoute from "../components/MyRoute";

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
            <MyRoute path="/profile">
              <Profile />
            </MyRoute>
            <MyRoute path="/children/:childId">
              <Feed />
            </MyRoute>
            <MyRoute path="/moments/:momentId">
              <SingleMoment />
            </MyRoute>
            <MyRoute path="/">
              <Feed />
            </MyRoute>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
