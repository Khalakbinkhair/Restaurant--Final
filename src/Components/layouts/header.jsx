import '../../Assests/css/style.css'
import '../../Assests/fonts/StorefrontPro.ttf'
import { Link } from "react-router-dom";
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';
import React, { useState, useEffect } from "react"



const Header = (props) => {
  return (
    <div>


        <Navbar  color="yellow" expand="lg" variant="light">
 

  <Navbar.Brand  className='nav-text' href="/">{props.restro_title} </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="me-auto ">

      

        <li className="nav-item">
        <Link className="nav-link"  to="/home"> Home </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/shop"> Shop </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact_us"> Contact Us </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/new_leter"> New Leter </Link>
        </li>
       
      </Nav>
    </Navbar.Collapse>
  
</Navbar>

    </div>

  )
}
export default Header;





