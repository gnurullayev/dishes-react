import React from 'react';
import { Link } from 'react-router-dom';

import "./footer.css"

import logo from "../images/food-7421671__340.webp"

function Footer(props) {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-inner d-flex justify-content-between align-items-center">
                    <Link to="/" className =".footer-logo">
                        <img src= {logo} alt="Logo img" width={"150px"} height = {"80px"}/>
                    </Link>

                    <ul className='footer-nav'>
                        <li className='footer-nav__item'>
                            <Link to="/" className="footer-nav__link text-light">Home</Link>
                        </li>

                        <li className='footer-nav__item'>
                            <Link to="/about" className="footer-nav__link ms-3 text-light">About</Link>
                        </li>

                        <li className='footer-nav__item'>
                            <Link to="/contact" className="footer-nav__link ms-3 text-light">Contact</Link>
                        </li>
                    </ul>

                    <p className="text">© {new Date().getFullYear()} TheMeal</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;