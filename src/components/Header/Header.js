import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const history = useHistory();
    const handleLogin = () => {
        history.push("/login")
    }
    return (
        <div>
             <Navbar className="container" bg="light" expand="lg">
                <Navbar.Brand className="mr-auto brand" href="#home"><h3>Buy-Buy-Buyers</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="link">Home</Link>
                        <Link to="/order" className="link">Order</Link>
                        <Link to="/admin" className="link">Admin</Link>
                        <Link to ="/checkout" className="link">Checkout</Link>
                        <button onClick={()=>handleLogin()}  className="btn btn-outline-primary btn-lg">Log in</button>
                    </Nav>    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;