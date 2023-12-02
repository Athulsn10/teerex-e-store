import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header() {
  return (
   <>
     <Navbar fixed='top' expand="lg" className="bg-body-tertiary m-2">
      <Container fluid>
        <Link to='/'><Navbar.Brand><img width={55} src='../logo.png'/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/wishlist'><i className="fa-solid me-3 fa-heart fs-4"></i></Link>
            <Link to='/cart'><i className="fa-solid fs-4 me-3 fa-cart-shopping"></i></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header