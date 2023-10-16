import React from 'react';
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export function EducationPage(props) {
  return (
    <div>
      <header>
        <h1>Education Page</h1>
        <Button><NavLink to='/home'>Home page</NavLink></Button>
        <Button><NavLink to='/resources'>Resources page</NavLink></Button>
        <Button><NavLink to='/donations'>Donation page</NavLink></Button>
      </header>
    </div>
  )
}