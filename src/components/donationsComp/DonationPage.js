import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar.js';
import NavBar from '../NavBar.js';
import { CardList } from '../CardList.js';

export default function DonationPage(props) {
  return (
    <div className="background-page">
      <NavBar />
      <header>
        <h1>Donation Page</h1>
        <nav>
          
        </nav>
      </header>
      <main>
        <SearchBar />
        <CardList />
      </main>
    </div>
  )
}