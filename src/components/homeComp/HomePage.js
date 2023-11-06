import React from 'react';
import {NavLink} from 'react-router-dom'

export default function HomePage(props) {
  return (
    <div>
      <header>
        <h1>Aquanauts Homescreen</h1>
      </header>
      <main>
        <h2>What kind of Aquanaut are you?</h2>
        <div className="d-flex flex-column w-25 mx-auto">
          <button type="button" className="btn btn-info btn-lg mb-5 mt-5 nav-link"><NavLink to='/resources'>Resource page</NavLink></button>
          <button type="button" className="btn btn-info btn-lg mb-5 nav-link"><NavLink to='/donations'>Donation page</NavLink></button>
          <button type="button" className="btn btn-info btn-lg mb-5 nav-link"><NavLink to='/education'>Education page</NavLink></button>
        </div>
      </main>
    </div>
  )
}