import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../Hooks/UseAuth';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand ><img className=" w-25" src="https://i.ibb.co/TP3Rj7C/gymx-logo.png" alt="" /></Navbar.Brand>
    <Nav className="me-auto justify-content-end">
      <Link to="/home" className="nav-link">Home</Link>
      <Link to="/services" className="nav-link">Services</Link>
      <Link to="/instructors" className="nav-link">Instructors</Link>
      <Link to="/blog" className="nav-link">Blog</Link>
      {user?.email ?
        <Link to="/login" className="nav-link">Login</Link>:
        <Link onClick={logOut} className="nav-link">Logout</Link>
        }
      <Navbar.Text>
      {user.displayName}
      </Navbar.Text>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;