import React, { useContext } from "react";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/auth";
import { IChild } from "../../utils/interfaces";
import DeleteButton from "../Buttons/DeleteButton";

const ChildrenListItem: React.FC<{ child: IChild }> = ({ child }) => {
  const { user } = useContext(AuthContext);

  return (
    <ListGroupItem className="info-meta">
      <div className="info">
        <span>
          <img className="profile-image mr-2" src="https://via.placeholder.com/45" alt="" />
          <Link className="child-name" to={`/children/${child.id}`}>
            {child.name}
          </Link>
        </span>
      </div>
      <div className="buttons">
        {user && user.id === child.createdBy ? (
          <DeleteButton childId={child.id} momentId={undefined} commentId={undefined} />
        ) : null}
      </div>
    </ListGroupItem>
  );
};

export default ChildrenListItem;
