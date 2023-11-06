import React from 'react';
import {NavLink} from 'react-router-dom'
import '../../index.css'

export default function EducationPage(props) {
  return (
    <div className="background-page">
      <header>
        <h1>Education Page</h1>
      </header>
      <main>
        <button type="button" className="btn btn-info btn-lg"><NavLink to='/home'>Home page</NavLink></button>
        <button type="button" className="btn btn-info btn-lg"><NavLink to='/resources'>Resources page</NavLink></button>
        <button type="button" className="btn btn-info btn-lg"><NavLink to='/donations'>Donation page</NavLink></button>
      </main>
    </div>
  )
}