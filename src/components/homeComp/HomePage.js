import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import '../../index.css';

export default function HomePage(props) {

  return (
    <div className="background-onboard">
      <header>
        <h1 className="header">the AquaPod</h1>
      </header>
      <main>
        <h2 className="sub-header">What kind of Aquanaut are you?</h2>
        <div className="button-links">
          <div className="d-flex flex-column w-25 mx-auto">
            <Link to='/resources' className="btn btn-info btn-lg mb-5 mt-5 nav-link">Resource page</Link>
            <Link to='/donations' className="btn btn-info btn-lg mb-5 nav-link">Donation page</Link>
            <Link to='/education' className="btn btn-info btn-lg mb-5 nav-link">Education page</Link>
          </div>
        </div>

      </main>
    </div>
  )
}