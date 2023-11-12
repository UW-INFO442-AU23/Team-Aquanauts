import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar.js';
import '../../index.css'
import NavBar from '../NavBar.js';

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
      </main>
    </div>
  )
}