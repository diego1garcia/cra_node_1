import React from 'react';


// const HelloWorld = () => {

// };

// export default HelloWorld;

// const HelloWorld = () => {
//     return <h2 onClick={alert("holamundo")} className = "App-link"> Hello World</h2>;
// }

// export default HelloWorld;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Egar´s Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
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
  );
}

export default CollapsibleExample;
