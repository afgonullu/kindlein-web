import React from "react";
import { Card } from "react-bootstrap";

import { IUser } from "../utils/interfaces";
import profilePic from "../assets/images/github.jpg";

const UserProfile: React.FC<{ user: IUser | null }> = ({ user }) => {
  return (
    <Card>
      <Card.Body className="d-flex flex-column align-items-center">
        <img className="profile-image" src={profilePic} width="150px" height="150px" alt="" />
        <Card.Title>{user?.username}</Card.Title>
        <Card.Subtitle>{user?.email}</Card.Subtitle>
        <Card.Text>Hello There, What a wonderful world.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserProfile;
