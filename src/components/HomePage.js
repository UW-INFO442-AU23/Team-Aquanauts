import React from 'react';
import {NavLink} from 'react-router-dom'

export function HomePage(props) {
  return (
    <div>
      <header>
        <h1>Aquanauts Homescreen</h1>
      </header>
      <main>
        <button type="button" className="btn btn-info btn-lg"><NavLink to='/resources'>Resource page</NavLink></button>
        <button type="button" className="btn btn-info btn-lg"><NavLink to='/donations'>Donation page</NavLink></button>
        <button type="button" className="btn btn-info btn-lg"><NavLink to='/education'>Education page</NavLink></button>
      </main>
    </div>
  )
}