import React from 'react';
import NavBar from '../NavBar.js';
import DropSearch from './DropSearch.js';

export default function DonationPage(props) {
  return (
    <div className="background-page">
      <NavBar />
      <header>
        <h1>Donation Page</h1>
      </header>
      <main>
        <DropSearch />
      </main>
    </div>
  )
}