import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

import MomentList from "../components/MomentList/MomentList";
import MomentForm from "../components/MomentForm";
import { AuthContext } from "../context/auth";
import Footer from "../layouts/Footer";

const ChildFeed: React.FC = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <main className="kl-main kl-feed">
      <Container>
        <Row>
          <Col xl={7} className="px-3">
            <MomentList />
          </Col>
          <Col className="px-1">
            <MomentForm />
            <Footer />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ChildFeed;
