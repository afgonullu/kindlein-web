import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Profile: React.FC = () => {
  return (
    <main className="kl-main">
      <Container>
        <Row>
          <Col xl={7}>2</Col>
          <Col xl={5}>3</Col>
        </Row>
      </Container>
    </main>
  );
};

export default Profile;
