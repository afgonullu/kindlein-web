/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";

import { useLogin } from "../graphql/users";
import { useForm } from "../utils/useForm";
import { AuthContext } from "../context/auth";

import loginImage from "../assets/images/login.jpg";
import logo from "../assets/images/logo.png";

const Login: React.FC = () => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const [errors, setErrors] = useState({ username: "", password: "" });
  // TODO: Client Side Validation

  const loginUser = useLogin(setErrors, history, context);

  const { onChange, onSubmit, values } = useForm(loginUser, {
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
                <p className="login-card-description">Sign into your account</p>
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
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="sr-only">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Your password"
                      name="password"
                      value={values.password}
                      onChange={onChange}
                      isInvalid={errors.password !== "" && !!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="extra" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" disabled label="Remember Me" />
                    <p>
                      <a href="#!" className="forgot-password-link">
                        Forgot password?
                      </a>
                    </p>
                  </Form.Group>
                  <Button className="btn-block login-btn mb-4" variant="primary" type="submit">
                    Login
                  </Button>
                </Form>

                <p className="text-center">Don&apos;t have and account?</p>
                <Button className="btn-block" variant="danger" type="submit" as={Link} to="/register">
                  Register
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
