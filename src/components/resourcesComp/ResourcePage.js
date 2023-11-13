import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar.js';
import Cards from '../Cards.js';
import '../../index.css';
import NavBar from '../NavBar.js';
const CARDINFO = [
  {locName: 'loc1', pic: '', }
];

export default function ResourcePage(props) {
  return (
    <div className="background-page">
      <NavBar />
      <header>
        <h1>Resource Page</h1>
        <nav>

        </nav>
      </header>
      <main>
        <SearchBar/>
        <Cards CardInfo={CARDINFO} />
      </main>
    </div>
  )
}