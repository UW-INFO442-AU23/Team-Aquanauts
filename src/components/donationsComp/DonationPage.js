import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar.js';

export default function DonationPage(props) {
  return (
    <div>
      <header>
        <h1>Donation Page</h1>
        <nav>
          <button type="button" className="btn btn-info btn-lg"><NavLink to='/home'>Home page</NavLink></button>
          <button type="button" className="btn btn-info btn-lg"><NavLink to='/donations'>Donation page</NavLink></button>
          <button type="button" className="btn btn-info btn-lg"><NavLink to='/education'>Education page</NavLink></button>
        </nav>
      </header>
      <main>
        <SearchBar />
      </main>
    </div>
  )
}