/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import logo from "../images/food-7421671__340.webp"

import "./header.css"

function Header() {
    const {pathname} = useLocation()

    return (
        <header className='header'>
            <div className="container">
                <div className="header-inner d-flex align-items-center justify-content-between">
                    <Link className='logo' to="/">
                        <img src= {logo} alt="Logo img" width={"150px"} height = {"80px"}/>
                    </Link>

                    <ul className='nav'>
                        <li className='nav-item'>
                            <Link 
                            to="/" 
                            className="nav-link link" 
                            style={{backgroundColor: pathname === "/" ? "rgb(179, 58, 10)" : "transparent"}}
                            >
                            Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link 
                            to="/about" 
                            className="nav-link link ms-3"
                            style={{backgroundColor: pathname === "/about" ? "rgb(179, 58, 10)" : "transparent"}}
                            >
                                About
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link 
                            to="/contact" 
                            className="nav-link link ms-3"
                            style={{backgroundColor: pathname === "/contact" ? "rgb(179, 58, 10)" : "transparent"}}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;