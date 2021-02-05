import React from "react";
import { Button, Container, Form } from "react-bootstrap";

import { useAddComment } from "../graphql/comments";
import { useForm } from "../utils/useForm";

const CommentForm: React.FC<{ momentId: string }> = ({ momentId }) => {
  const addComment = useAddComment();

  const { onChange, onSubmit, values } = useForm(addComment, {
    body: "",
    id: momentId,
  });

  return (
    <Container className="kl-form-container">
      <h4 className="half-title text-center">Add New CommentForm</h4>
      <Form noValidate onSubmit={onSubmit} className="kl-card kl-form">
        <Form.Group controlId="formBasicBody" className="kl-form-group">
          {/* <Form.Label>Moment Title</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Your Comment"
            name="body"
            value={values.body}
            onChange={onChange}
            className="kl-form-control"
            // isInvalid={errors.name !== "" && !!errors.name}
          />
          {/* <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback> */}
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-block kl-form-button">
          Add New Comment
        </Button>
      </Form>
    </Container>
  );
};

export default CommentForm;
