import React from 'react';
import {  Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark">
                   <>
                    <Navbar.Brand className='px-5 ' href="#home">
                        REFRIGERATOR WORLD
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='pe-3 text-white text-decoration-none' to="/home">Home</Link>
                        <Link className='pe-3 text-white text-decoration-none' to="/allProduct">All product</Link>
                        <Link className='pe-3 text-white text-decoration-none' to="/manageItem">Manage Item</Link>
                        <Link className='pe-3 text-white text-decoration-none' to="/blog">Blog</Link>
                        <Link className='pe-3 text-white text-decoration-none' to="/login">Login</Link>
                        <Link className='pe-3 text-white text-decoration-none' to="/signUP">Sign Up</Link>
                    </Nav>
                   </>
            </Navbar>
        </div>
    );
};

export default Header;