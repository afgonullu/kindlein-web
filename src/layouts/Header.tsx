import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Home, LogIn } from "react-feather";

import logo from "../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <header className="kl-header">
      <Navbar expand="lg">
        <Navbar.Brand className="brand-wrapper mb-0" href="/">
          <img src={logo} alt="logo" className="logo" />
          Kindlein
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="w-100" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">
              <Home />
              <span>Home</span>
            </NavLink>
            <NavLink className="nav-link" to="/profile">
              <LogIn />
              <span>Profile</span>
            </NavLink>
            <NavLink className="nav-link" to="/login">
              <LogIn />
              <span>Login</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
