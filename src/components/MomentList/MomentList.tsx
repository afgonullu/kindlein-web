/* eslint-disable react/destructuring-assignment */
import React from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { IMoment } from "../../utils/interfaces";
import MomentListItem from "./MomentListItem";
import { useGetChild } from "../../graphql/children";

const MomentList: React.FC = () => {
  const { childId } = useParams<{ childId: string }>();

  const child = useGetChild(childId);

  const moments = child
    ? child.moments.map((moment: IMoment) => {
        return <MomentListItem key={moment.id} moment={moment} />;
      })
    : "No Moments Yet";

  return <ListGroup>{moments}</ListGroup>;
};

export default MomentList;
