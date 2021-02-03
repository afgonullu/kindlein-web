import React, { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { AuthContext } from "../context/auth";
import { useGetChildren } from "../graphql/children";
import { useAddMoment } from "../graphql/moments";
import { useForm } from "../utils/useForm";

const MomentForm: React.FC = () => {
  const { user } = useContext(AuthContext);
  // const [errors, setErrors] = useState({ title: "", body: "", momentDate: "", location: "" })

  const addMoment = useAddMoment();
  const children = useGetChildren(user?.id);

  const { onChange, onSubmit, values } = useForm(addMoment, {
    title: "",
    body: "",
    belongsTo: "",
    momentDate: "",
    location: "",
  });

  // TODO: Form styling, wording, labels and other stuff.
  // TODO: transition. transition libraries
  // TODO: errors, error views
  return (
    <Container className="kl-form-container">
      <Form noValidate onSubmit={onSubmit} className="kl-card kl-form">
        <Form.Group as={Row} className="kl-form-group">
          <Form.Label as="legend" column sm={2}>
            Children
          </Form.Label>
          <Col sm={10}>
            {children.map((child) => (
              <Form.Check
                key={child.id}
                type="radio"
                value={child.id}
                onChange={onChange}
                label={child.name}
                name="belongsTo"
                id="formHorizontalRadios1"
              />
            ))}
          </Col>
        </Form.Group>
        <Form.Group controlId="formBasicTitle" className="kl-form-group">
          {/* <Form.Label>Moment Title</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Give A Title"
            name="title"
            value={values.title}
            onChange={onChange}
            className="kl-form-control"
            // isInvalid={errors.title !== "" && !!errors.title}
          />
          {/* <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group controlId="formBasicBody" className="kl-form-group">
          {/* <Form.Label>Moment Body</Form.Label> */}
          <Form.Control
            as="textarea"
            placeholder="What happened?"
            name="body"
            value={values.body}
            onChange={onChange}
            className="kl-form-control"
            // isInvalid={errors.body !== "" && !!errors.body}
          />
          {/* <Form.Control.Feedback type="invalid">{errors.body}</Form.Control.Feedback> */}
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="formBasicDate" className="kl-form-group">
              {/* <Form.Label>Moment Date</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Date"
                name="momentDate"
                value={values.momentDate}
                onChange={onChange}
                className="kl-form-control"
                // isInvalid={errors.momentDate !== "" && !!errors.momentDate}
              />
              {/* <Form.Control.Feedback type="invalid">{errors.momentDate}</Form.Control.Feedback> */}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicLocation" className="kl-form-group">
              {/* <Form.Label>Moment Location</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Place"
                name="location"
                value={values.location}
                onChange={onChange}
                className="kl-form-control"
                // isInvalid={errors.location !== "" && !!errors.location}
              />
              {/* <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback> */}
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="btn-block kl-form-button">
          Save The Moment
        </Button>
      </Form>
    </Container>
  );
};

export default MomentForm;
