import { gql, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";

import { AuthContext } from "../../context/auth";
import { IChild } from "../../utils/interfaces";
import ChildrenListItem from "./ChildrenListItem";

const query = gql`
  query getChildrenOfUser($userId: ID!) {
    children(userId: $userId) {
      name
      id
      createdBy
      createdAt
      birthDate
    }
  }
`;

const ChildrenList: React.FC = () => {
  const { user } = useContext(AuthContext);

  const { error, loading, data } = useQuery(query, { variables: { userId: user?.id } });

  if (loading) return <p />;
  if (error) return <p>Error!</p>;

  const childrenList = data.children
    ? data.children.map((child: IChild) => <ChildrenListItem key={child.id} child={child} />)
    : "No Children Yet";

  return <ListGroup>{childrenList}</ListGroup>;
};

export default ChildrenList;
