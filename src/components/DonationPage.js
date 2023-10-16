import React from 'react';
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export function DonationPage(props) {
  return (
    <div>
      <header>
        <h1>Donation Page</h1>
        <Button><NavLink to='/home'>Home page</NavLink></Button>
        <Button><NavLink to='/resources'>Resource page</NavLink></Button>
        <Button><NavLink to='/education'>Education page</NavLink></Button>
      </header>
    </div>
  )
}