import React from 'react';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav_logo">EV-olution</div>
      <ul className="nav_menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav_contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
