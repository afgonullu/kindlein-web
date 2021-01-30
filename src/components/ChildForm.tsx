import React from "react";
import { Button, Container, Form } from "react-bootstrap";

import { useAddChild } from "../graphql/children";
import { useForm } from "../utils/useForm";

const ChildForm: React.FC = () => {
  const addChild = useAddChild();

  const { onChange, onSubmit, values } = useForm(addChild, {
    name: "",
    momentDate: "",
  });

  return (
    <Container className="kl-form-container">
      <Form noValidate onSubmit={onSubmit} className="kl-card kl-form">
        <Form.Group controlId="formBasicName" className="kl-form-group">
          {/* <Form.Label>Moment Title</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Child's Name"
            name="name"
            value={values.name}
            onChange={onChange}
            className="kl-form-control"
            // isInvalid={errors.name !== "" && !!errors.name}
          />
          {/* <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group controlId="formBasicDate" className="kl-form-group">
          {/* <Form.Label>Moment Date</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Date"
            name="birthDate"
            value={values.birthDate}
            onChange={onChange}
            className="kl-form-control"
            // isInvalid={errors.birthDate !== "" && !!errors.birthDate}
          />
          {/* <Form.Control.Feedback type="invalid">{errors.momentDate}</Form.Control.Feedback> */}
        </Form.Group>
        <Button variant="primary" type="submit" className="kl-form-button">
          Add New Child
        </Button>
      </Form>
    </Container>
  );
};

export default ChildForm;
