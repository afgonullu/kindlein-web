/* eslint-disable react/destructuring-assignment */
import React from "react";
import { ListGroup } from "react-bootstrap";

import { IComment } from "../../utils/interfaces";
import CommentListItem from "./CommentListItem";

const CommentList: React.FC<{ comments: IComment[] }> = ({ comments }) => {
  const commentList = comments
    .flat(1)
    .sort((b, a) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
    .map((comment: IComment) => {
      return <CommentListItem key={comment.id} comment={comment} />;
    });

  return <ListGroup>{commentList}</ListGroup>;
};

export default CommentList;
