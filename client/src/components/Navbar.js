import React from 'react'
import Brand from '../assets/Brand'
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap'
import './navbar.css'
const Navbar = () => {
    return (
        <div className='container' >
            <div className="d-flex flex-column flex-md-row align-items-center mt-md-3 pb-3 mb-3 border-bottom">
                <a href="/" className="d-flex align-items-center text-decoration-none">
                    <Brand height={55} />
                </a>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto navigation">
                    <Nav.Link><Link className="me-3 py-2 text-dark text-decoration-none" to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link className="me-3 py-2 text-dark text-decoration-none" to="/about">About</Link></Nav.Link>
                    <Nav.Link><Link className="me-3 py-2 text-dark text-decoration-none" to="/contact">Contact</Link></Nav.Link>
                    <Nav.Link><Link className="me-3 py-2 text-dark text-decoration-none" to="/support">Support</Link></Nav.Link>
                </nav>
                <nav className="d--inline-flex ms-md-auto">
                    <IconContext.Provider value={{ size: "2em", color: "black", }}>
                        <a className="me-2" href="https://github.com/xanderbilla"><FaGithub /></a>
                    </IconContext.Provider>
                    <Link type="submit" className="me-2 btn btn-outline-dark text-decoration-none" to="/signIn">Sign In</Link>
                    <Link type="submit" className="btn btn-dark text-decoration-none" to="/signUp">Sign Up</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar