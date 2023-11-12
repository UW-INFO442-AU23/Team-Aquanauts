import React from 'react';
import { 
  BrowserRouter as Router, 
  Link, 
  NavLink
} from 'react-router-dom'

export default function NavBar(props) {
      return (
          <div className="top-nav">
            <div className="nav-container">
              <div className="title-bar">
                <Link to="home"><h1>the Aquapod</h1></Link>
              </div>
              <div className="nav-bar">
                <div className="nav-links">
                  <NavLink to="/resources">Resources</NavLink>
                  <NavLink to="/donations">Donate</NavLink>
                  <NavLink to="/education">Education</NavLink>
                </div>
              </div>
            </div>
          </div>
      );
  }
