import React from 'react'
import {Link, Outlet} from "react-router-dom"
import logo from '../OneStopLogo.svg'; 
import {Nav, Navbar, Container}  from 'react-bootstrap'



const AdminPage = () => {

  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand className='d-flex' href="/admin">
        <embed
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        <h1 className='mx-3'>1Stop</h1>
      </Navbar.Brand>
        <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/admin/products">Products</Nav.Link>
            <Nav.Link href="/admin/orders">Orders</Nav.Link>
        </Nav>
    </Container>
  </Navbar>
  <Outlet />
</>
  )
}

export default AdminPage