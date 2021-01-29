import React from "react";
import { Card } from "react-bootstrap";

const UserProfile: React.FC = () => {
  return (
    <Card>
      <Card.Body>
        <img src="https://via.placeholder.com/150" alt="" />
        <Card.Title>abdullah</Card.Title>
        <Card.Subtitle>afgonullu@gmail.com</Card.Subtitle>
        <Card.Text>Hello There what a wonderful world.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserProfile;
