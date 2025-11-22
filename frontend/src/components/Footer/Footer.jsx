import React from "react";

import { Link } from "react-router-dom";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebookF} from "react-icons/fa";

import "./Footer.css"

function Footer() {
    return (
        <>
            <section className="footer-sec">
                <p>&copy; 2025 Avanta Studio. All rights reserved.</p>
                <ul>
                    <li>
                        <Link to="https://www.youtube.com/@avanta_studio" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/@avanta_studio" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.twitter.com/@avanta_studio" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.facebook.com/@avanta_studio" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </Link>
                    </li>
                </ul>
                <p>Privacy Policy</p>
            </section>
        </>
    );
}

export default Footer;