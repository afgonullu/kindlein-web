/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-return-assign */
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/auth";
import { IMoment } from "../../utils/interfaces";
import DeleteButton from "../Buttons/DeleteButton";

const MomentListItem: React.FC<{ moment: IMoment }> = ({ moment }) => {
  const context = useContext(AuthContext);

  return (
    <Card className="kl-card">
      {/* <Card.Header className="kl-card-header">
        {moment.tags.map((tag) => (
          <span key={tag.body}>{tag.body}</span>
        ))}
      </Card.Header> */}
      <Card.Body className="kl-card-body" onClick={() => (location.href = `/moments/${moment.id}`)}>
        <Card.Title>
          <span className="kl-card-title">{moment.title}</span>{" "}
          <span className="kl-card-meta text-muted">
            @{moment.belongsTo.name}, {moment.location}, on {new Date(moment.momentDate).toJSON().substr(0, 10)}
          </span>
        </Card.Title>
        <Card.Subtitle />
        <Card.Text className="kl-card-text">{moment.body}</Card.Text>
      </Card.Body>
      <Card.Footer className="kl-card-footer">
        <Link className="kl-card-comment" to={`/moments/${moment.id}`}>
          <i className="bi bi-chat" />
          <span>{moment.commentCount}</span>
        </Link>
        {context.user && context.user.username === moment.createdBy ? (
          <DeleteButton childId={null} momentId={moment.id} commentId={null} />
        ) : null}
      </Card.Footer>
    </Card>
  );
};

export default MomentListItem;