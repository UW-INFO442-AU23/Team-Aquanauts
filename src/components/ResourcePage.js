import React from 'react';
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export function ResourcePage(props) {
  return (
    <div>
      <header>
        <h1>Resource Page</h1>
        <Button><NavLink to='/home'>Home page</NavLink></Button>
        <Button><NavLink to='/donations'>Donation page</NavLink></Button>
        <Button><NavLink to='/education'>Education page</NavLink></Button>
      </header>
    </div>
  )
}