/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../context/auth";
import { IComment } from "../../utils/interfaces";
import DeleteButton from "../Buttons/DeleteButton";

const CommentListItem: React.FC<{ comment: IComment }> = ({ comment }) => {
  const { momentId } = useParams<{ momentId: string | undefined }>();
  const { user } = useContext(AuthContext);

  return (
    <Card className="kl-card">
      {/* <Card.Header className="kl-card-header">
        {moment.tags.map((tag) => (
          <span key={tag.body}>{tag.body}</span>
        ))}
      </Card.Header> */}
      <Card.Body className="kl-card-body">
        <Card.Title>
          <span className="kl-card-title">{comment.username}</span>{" "}
          <span className="kl-card-meta text-muted">@{comment.createdAt}</span>
        </Card.Title>
        <Card.Text className="kl-card-text">{comment.body}</Card.Text>
      </Card.Body>
      <Card.Footer className="kl-card-footer info-meta">
        <div className="interactions">
          <span>{comment.createdAt}</span>
        </div>
        <div className="meta" />

        {user && user.username === comment.username ? (
          <DeleteButton childId={undefined} momentId={momentId} commentId={comment.id} />
        ) : null}
      </Card.Footer>
    </Card>
  );
};

export default CommentListItem;
