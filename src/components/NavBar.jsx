import React from "react";
import {Link, Outlet} from "react-router-dom"
// import axios from "axios";
import SearchBar from "./SearchBar";
import { useCart } from "../hooks/useCart";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const {handleShowCart, totalItems} = useCart();

  // const handleLogout = () => {
  //   setUser(null);
  //   setActiveConversation(null);
  //   delete axios.defaults.headers.common["Authorization"];
  // };

  return (
    <>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>Test Store</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <SearchBar/>
          <div className="justify-content-end px-3">
            <Button style={{width:"3em", height:"3em", position: "relative"}} 
                    onClick = {handleShowCart}
                    variant="light outline-primary"
                    className="rounded-circle me-2"
                    >
              <FaShoppingCart style={{width:"2em", height:"2em", transform:"translate(-18%,0)"}}
                              />
              {totalItems > 0 && 
                    <div className ="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                          style={{width:"1.5em", height:"1.5em", color:"white", position: "absolute", bottom: 0, right: 0, transform:"translate(25%,25%)"}}
                          >
                    {totalItems}</div>}
            </Button>
          </div>
      </Container>
    </Navbar>
    <Outlet />
    </>

      
  );
};

export default NavBar;
