import React from "react";
import {Link} from "react-router-dom"
// import axios from "axios";
import { useCart } from "../CartContext";
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
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>Test Store</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Button style={{width:"3em", height:"3em", position: "relative"}} 
                  onClick = {handleShowCart}
                  variant="light outline-primary"
                  className="rounded-circle"   
                  >
            <FaShoppingCart style={{width:"2em", height:"2em", transform:"translate(-18%,0)"}} />
            {totalItems > 0 && 
                  <div className ="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{width:"1.5em", height:"1.5em", color:"white", position: "absolute", bottom: 0, right: 0, transform:"translate(25%,25%)"}}
                        >
                  {totalItems}</div>}
          </Button>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>

      
  );
};

export default NavBar;
