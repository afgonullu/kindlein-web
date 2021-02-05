/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Heart } from "react-feather";

import { useLikeMoment } from "../../graphql/moments";
import { IMoment, IUser } from "../../utils/interfaces";

const LikeButton: React.FC<{ user: IUser; moment: IMoment }> = ({ user, moment }) => {
  const [liked, setLiked] = useState(false);

  const likeMoment = useLikeMoment();

  const handleClick = () => {
    setLiked(!liked);
    likeMoment({ variables: { id: moment.id } });
  };

  useEffect(() => {
    // if (user && moment.likes.find((like) => like.username === user.username)) {
    //   setLiked(true);
    // } else {
    //   setLiked(false);
    // }
  }, [user, moment.likes]);

  return (
    <Button as="a" className="kl-card-like" onClick={handleClick}>
      {liked ? <Heart stroke="red" fill="red" /> : <Heart />}
      <span>{moment.likeCount}</span>
    </Button>
  );
};

export default LikeButton;
