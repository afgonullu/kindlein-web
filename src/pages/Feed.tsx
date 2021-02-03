import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import MomentList from "../components/MomentList/MomentList";
import MomentForm from "../components/MomentForm";
import Footer from "../layouts/Footer";

const Feed: React.FC = () => {
  return (
    <main className="kl-main kl-feed">
      <Container>
        <Row>
          <Col xl={7} className="content px-3">
            <MomentList />
          </Col>
          <Col className="sidebar px-1">
            <MomentForm />
            <Footer />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Feed;
