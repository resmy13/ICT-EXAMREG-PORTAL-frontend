import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navbarstd.css'

const Navbarstd = () => {
  return (
    <div><Navbar expand="lg" className="bg-body-secondary">
    <Container>
    
        <Navbar.Brand href="#home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/ICT_Academy_Kerala.webp"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
      
      <Navbar.Brand href="#home">ICT Academy OF Kerala</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  className="justify-content-end">
        <Nav  className="ml-auto">
          <a href="/" style={{textDecoration:"none",color:"black"}}>Logout</a>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navbarstd;