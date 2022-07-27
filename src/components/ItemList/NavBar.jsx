import React from "react";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to={"/"}>
        <img src="https://i.pinimg.com/originals/60/86/f3/6086f3ea789e1beaa1f948e060a28a2c.png" width={20} alt="" />
        <Navbar.Brand href="#home"> gar´s Room</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#all">All</Nav.Link>
            <Nav.Link href="#we">What is Egar´s Room?</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#t-shirts/3.1">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#Pants/3.2">
                Pants
              </NavDropdown.Item>
              <NavDropdown.Item href="#Jackets/3.3">Jackets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Shoes/3.4">
                Shoes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#aid">Help me!</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

)};

export default NavBar; 