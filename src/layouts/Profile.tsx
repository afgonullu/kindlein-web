import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChildForm from "../components/ChildForm";
import ChildrenList from "../components/ChildrenList/ChildrenList";
import UserProfile from "../components/UserProfile";
import Footer from "./Footer";

const Profile: React.FC = () => {
  return (
    <main className="kl-main">
      <Container>
        <Row>
          <Col xl={7}>
            <UserProfile />
            <ChildrenList />
          </Col>
          <Col>
            <ChildForm />
            <Footer />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Profile;
