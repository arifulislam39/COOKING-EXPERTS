/*eslint-disable */
import Button from "react-bootstrap/Button";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
//import logo '../../../assets/banner.jpg'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Nav>
            <Navbar.Brand href="#home">
            Cooking Experts
          </Navbar.Brand>
            </Nav>
          <Nav className="mx-auto">
          
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Blogs</Nav.Link>
            
          </Nav>
          <Button variant="danger">Login</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
