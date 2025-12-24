import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from "/Avanta.png"
import shopNavbarData from '../../data/shopNavbar';

import './Sidebar.css';

export default function Sidebar() {

    const [navbarItems, setNavbarItems] = useState(shopNavbarData);

  return (
    <div className='sidebar'>
      <Link to={"/"} className='sidebar-head'> 
        <img src={Logo} alt="Logo" className='sidebar-img' />
        <span className='sidebar-logo'>Avanta Store</span>
      </Link>
      <ul className="store-links">
        {
            navbarItems.map((item) => (
                <li key={item.id} className={`store-item ${item.active ? 'sidebar-active' : ''}`}>
                    <Link to={item.target}>{item.name}</Link>
                </li>
            ))
        }
      </ul>
    </div>
  )
}
