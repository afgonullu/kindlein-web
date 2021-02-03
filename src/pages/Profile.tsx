import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { AuthContext } from "../context/auth";
import ChildForm from "../components/ChildForm";
import ChildrenList from "../components/ChildrenList/ChildrenList";
import UserProfile from "../components/UserProfile";
import Footer from "../layouts/Footer";

const Profile: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className="kl-main kl-profile">
      <Container>
        <Row>
          <Col xl={7} className="content px-3">
            <UserProfile user={user} />
            <h4 className="half-title text-center">My Children</h4>
            <ChildrenList />
          </Col>
          <Col className="sidebar px-1">
            <ChildForm />
            <Footer />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Profile;
