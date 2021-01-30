import React from "react";
import { Card } from "react-bootstrap";
import { IUser } from "../utils/interfaces";

const UserProfile: React.FC<{ user: IUser | null }> = ({ user }) => {
  return (
    <Card>
      <Card.Body className="d-flex flex-column align-items-center">
        <img className="profile-image" src="https://via.placeholder.com/150" alt="" />
        <Card.Title>{user?.username}</Card.Title>
        <Card.Subtitle>{user?.email}</Card.Subtitle>
        <Card.Text>Hello There what a wonderful world.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserProfile;
