/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList/CommentList";
import MomentListItem from "../components/MomentList/MomentListItem";
import { useGetMoment } from "../graphql/moments";

const SingleMoment: React.FC = () => {
  const { momentId } = useParams<{ momentId: string | undefined }>();

  const moment = useGetMoment(momentId);

  console.log(moment);
  return (
    <main className="kl-main kl-profile">
      <Container>
        <Row>
          <Col xl={7} className="content px-3">
            <MomentListItem moment={moment!} />
            <CommentList comments={moment!.comments} />
          </Col>
          <Col className="sidebar px-1">
            <CommentForm momentId={moment!.id} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SingleMoment;
