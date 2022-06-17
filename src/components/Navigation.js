import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default class Navigation extends Component {
  render() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Midwest Hotshot Trailers</Navbar.Brand>
            <Nav >
              <Nav.Link href="#products" className='page-scroll'>Products</Nav.Link>
              <Nav.Link href="#contact" className='page-scroll'>Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )};
}
