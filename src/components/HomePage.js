import React from 'react';
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export function HomePage(props) {
  return (
    <div>
      <header>
        <h1>Aquanauts Homescreen</h1>
        <nav>
          <Button><NavLink to='/resources'>Resource page</NavLink></Button>
          <Button><NavLink to='/donations'>Donation page</NavLink></Button>
          <Button><NavLink to='/education'>Education page</NavLink></Button>
        </nav>
      </header>
    </div>
  )
}