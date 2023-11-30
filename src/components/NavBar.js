import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from 'react-router-dom'
import './../index.css'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (id) => {
    setActiveLink(id);
  };

  const handleNavLinkMouseEnter = (id) => {
    if (activeLink !== id) {
      setActiveLink(null);
    }
  };

  return (
    <div className="top-nav">
      <div className="nav-container">
        <div className="title-bar">
          <Link to="home" style={{ textDecoration: 'none' }}><h1>the AquaPod</h1></Link>
        </div>
        <div className="nav-bar">
          <div className="nav-links">
            <NavLink id="resource-link" to="/resources" style={{ textDecoration: 'none' }} activeclassname="active" onClick={() => handleNavLinkClick('resource-link')} onMouseEnter={() => handleNavLinkMouseEnter('resource-link')}>Resources</NavLink>
            <NavLink id="donate-link" to="/donations" style={{ textDecoration: 'none' }} activeclassname="active" onClick={() => handleNavLinkClick('donation-link')} onMouseEnter={() => handleNavLinkMouseEnter('donate-link')}>Donate</NavLink>
            <NavLink id="education-link" to="/education" style={{ textDecoration: 'none' }} activeclassname="active" onClick={() => handleNavLinkClick('education-link')} onMouseEnter={() => handleNavLinkMouseEnter('education-link')}>Education</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
