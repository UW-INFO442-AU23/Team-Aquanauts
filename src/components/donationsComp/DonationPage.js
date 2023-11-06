import React from 'react';
import {NavLink} from 'react-router-dom'
import '../../index.css'

export default function DonationPage(props) {
  return (
    <div className="background-page">
      <header>
        <h1>Donation Page</h1>
      </header>
      <main>
        <button type="button" className="btn btn-info btn-lg"><NavLink to='/home'>Home page</NavLink></button>
        <button type="button" className="btn btn-info btn-lg"><NavLink to='/resources'>Resources </NavLink></button>
        <button type="button" className="btn btn-info btn-lg"><NavLink to='/education'>Education </NavLink></button>
      </main>
    </div>
  )
}