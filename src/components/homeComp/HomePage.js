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
            <Link id="homepage-button" to='/resources' className="btn btn-info btn-lg mb-5 mt-5 nav-link">I am looking for resources!</Link>
            <Link id="homepage-button" to='/donations' className="btn btn-info btn-lg mb-5 nav-link">I am looking to donate!</Link>
            <Link id="homepage-button" to='/education' className="btn btn-info btn-lg mb-5 nav-link">I want to educate myself!</Link>
          </div>
        </div>
      </main>
    </div>
  )
}