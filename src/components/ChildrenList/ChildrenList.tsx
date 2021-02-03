import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";

import { AuthContext } from "../../context/auth";
import { useGetChildren } from "../../graphql/children";
import { IChild } from "../../utils/interfaces";
import ChildrenListItem from "./ChildrenListItem";

const ChildrenList: React.FC = () => {
  const { user } = useContext(AuthContext);

  const children = useGetChildren(user?.id);

  const childrenList = children
    ? children.map((child: IChild) => <ChildrenListItem key={child.id} child={child} />)
    : "No Children Yet";

  return <ListGroup>{childrenList}</ListGroup>;
};

export default ChildrenList;
