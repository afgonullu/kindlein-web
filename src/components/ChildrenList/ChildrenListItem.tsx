import React, { useContext } from "react";
import { ListGroupItem } from "react-bootstrap";

import { AuthContext } from "../../context/auth";
import { IChild } from "../../utils/interfaces";
import DeleteButton from "../Buttons/DeleteButton";

const ChildrenListItem: React.FC<{ child: IChild }> = ({ child }) => {
  const { user } = useContext(AuthContext);

  console.log(user);
  console.log(child);

  return (
    <ListGroupItem>
      <span>{child.name}</span>
      {user && user.id === child.createdBy ? (
        <DeleteButton childId={child.id} momentId={null} commentId={null} />
      ) : null}
    </ListGroupItem>
  );
};

export default ChildrenListItem;
