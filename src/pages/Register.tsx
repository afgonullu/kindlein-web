/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";

import { useRegister } from "../graphql/users";
import { useForm } from "../utils/useForm";
import { AuthContext } from "../context/auth";

import loginImage from "../assets/images/login.jpg";
import logo from "../assets/images/logo.png";

const Register: React.FC = () => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const [errors, setErrors] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  // TODO: Client Side Validation

  const registerUser = useRegister(setErrors, history, context);

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    password: "",
  });

  return (
    <div className="kl-login">
      <Container>
        <Card className="login-card">
          <Row className="no-gutters">
            <Col md={5}>
              <Image className="login-card-img" src={loginImage} />
            </Col>
            <Col md={7}>
              <Card.Body>
                <div className="brand-wrapper">
                  <img src={logo} alt="logo" className="logo" />
                  <h1 className="fw-bold">Kindlein</h1>
                </div>
                <p className="login-card-description">Start Using Kindlein Now</p>
                <Form noValidate onSubmit={onSubmit}>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label className="sr-only">User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Username"
                      name="username"
                      value={values.username}
                      onChange={onChange}
                      isInvalid={errors.username !== "" && !!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="sr-only">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your Email"
                      name="email"
                      value={values.email}
                      onChange={onChange}
                      isInvalid={errors.email !== "" && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="sr-only">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter a Strong Password"
                      name="password"
                      value={values.password}
                      onChange={onChange}
                      isInvalid={errors.password !== "" && !!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label className="sr-only">Retype Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Retype Your Password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={onChange}
                      isInvalid={errors.confirmPassword !== "" && !!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="extra" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" disabled label="Remember Me" />
                  </Form.Group>
                  <Button className="btn-block login-btn mb-4" variant="primary" type="submit">
                    Register
                  </Button>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
