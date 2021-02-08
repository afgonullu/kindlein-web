/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";

import { AuthContext } from "../../context/auth";
import { IMoment } from "../../utils/interfaces";
import DeleteButton from "../Buttons/DeleteButton";
import LikeButton from "../Buttons/LikeButton";

const MomentListItem: React.FC<{ moment: IMoment }> = ({ moment }) => {
  const { user } = useContext(AuthContext);
  const { momentId } = useParams<{ momentId: string | undefined }>();
  const history = useHistory();

  const handleClick = () => {
    if (!momentId) {
      history.push(`/moments/${moment.id}`);
    }
  };

  if (!moment) return <span>loading...</span>;

  return (
    <Card className="kl-card">
      {/* <Card.Header className="kl-card-header">
        {moment.tags.map((tag) => (
          <span key={tag.body}>{tag.body}</span>
        ))}
      </Card.Header> */}
      <Card.Body className="kl-card-body" onClick={handleClick}>
        <Card.Title>
          <span className="kl-card-title">{moment.title}</span>{" "}
          <span className="kl-card-meta text-muted">
            @{moment.belongsTo.name}, {moment.location}, on {new Date(moment.momentDate).toJSON().substr(0, 10)}
          </span>
        </Card.Title>
        <Card.Subtitle />
        <Card.Text className="kl-card-text">{moment.body}</Card.Text>
      </Card.Body>
      <Card.Footer className="kl-card-footer info-meta">
        <div className="interactions">
          <Link className="kl-card-comment" to={`/moments/${moment.id}`}>
            <i className="bi bi-chat" />
            <span>{moment.commentCount}</span>
          </Link>
          <LikeButton user={user!} moment={moment} />
        </div>
        <div className="meta" />

        {user && user.id === moment.createdBy ? (
          <DeleteButton childId={undefined} momentId={moment.id} commentId={undefined} />
        ) : null}
      </Card.Footer>
    </Card>
  );
};

export default MomentListItem;
