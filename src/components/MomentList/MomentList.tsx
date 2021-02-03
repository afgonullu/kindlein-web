/* eslint-disable react/destructuring-assignment */
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../context/auth";
import { IMoment } from "../../utils/interfaces";
import { useGetChild, useGetChildren } from "../../graphql/children";
import MomentListItem from "./MomentListItem";

const MomentList: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { childId } = useParams<{ childId: string | undefined }>();

  let moments;
  if (childId) {
    const child = useGetChild(childId);
    moments = child
      ? child.moments
          .flat(1)
          .sort((b, a) => Date.parse(a.momentDate) - Date.parse(b.momentDate))
          .map((moment: IMoment) => {
            return <MomentListItem key={moment.id} moment={moment} />;
          })
      : "hello";
  } else {
    const children = useGetChildren(user?.id);
    moments = children
      .map((child) => child.moments)
      .flat(1)
      .sort((b, a) => Date.parse(a.momentDate) - Date.parse(b.momentDate))
      .map((moment: IMoment) => {
        return <MomentListItem key={moment.id} moment={moment} />;
      });
  }

  return <ListGroup>{moments}</ListGroup>;
};

export default MomentList;
