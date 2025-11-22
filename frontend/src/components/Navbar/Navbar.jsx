import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiBookOpen } from "react-icons/fi";

import CardNav from "../CardNav/CardNav";

import Logo from "/Avanta.png"

const Navbar = () => {

    const items = [
        {
            label: "About",
            href: "/about",
            bgColor: "var(--accent-100)", 
            textColor: "var(--primary-100)",
            links: [
                { label: "History", href: "/about/history", ariaLabel: "History" },
                { label: "Vision", href: "/about/vision", ariaLabel: "Vision" },
                { label: "Mission", href: "/about/mission", ariaLabel: "Mission" },
                { label: "Project", href: "/about/project", ariaLabel: "Project" },
            ]
        },
        {
            label: "Shop", 
            href: "/shop",
            bgColor: "var(--accent-100)", 
            textColor: "var(--primary-100)",
            links: [
                { label: "Games", href: "/shop/games", ariaLabel: "Games" },
                { label: "Gems", href: "/shop/gems", ariaLabel: "Gems" },
                { label: "Skins", href: "/shop/skins", ariaLabel: "Skins" },
                { label: "Offers", href: "/shop/offers", ariaLabel: "Offers" },
            ]
        },
        {
            label: "Contact",
            href: "/contact",
            bgColor: "var(--accent-100)", 
            textColor: "var(--primary-100)",
            links: [
                { label: "Mail", href: "/contact/mail", ariaLabel: "Mail" },
                { label: "LinkedIn", href: "/contact/linkedin", ariaLabel: "LinkedIn" },
                { label: "Instagram", href: "/contact/instagram", ariaLabel: "Instagram" },
                { label: "Youtube", href: "/contact/youtube", ariaLabel: "Youtube" },
            ]
        }
    ];

    return (
        <div className="navbar">
            <CardNav
                logo={Logo}
                logoAlt="Avanta Logo"
                items={items}
                baseColor="var(--primary-50)"
                menuColor="var(--primary-200)"
                buttonBgColor="var(--primary-200)"
                buttonTextColor="var(--primary-100)"
                ease="power3.out"
            />
        </div>
    );
};

export default Navbar;