import React from 'react'
import { Form, FormControl, Nav, Navbar,  } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png" width="100px" alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <button variant="outline-success">Search</button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavBar
