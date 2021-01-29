import React from "react";
import { ListGroup } from "react-bootstrap";
import ChildrenListItem from "./ChildrenListItem";

const ChildrenList: React.FC = () => {
  return (
    <ListGroup>
      <ChildrenListItem />
      <ChildrenListItem />
      <ChildrenListItem />
      <ChildrenListItem />
      <ChildrenListItem />
    </ListGroup>
  );
};

export default ChildrenList;
