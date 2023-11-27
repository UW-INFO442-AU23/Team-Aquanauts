import React from 'react';
import NavBar from '../NavBar.js';
import DropSearch from './DropSearch.js';
import { charityContent } from "../../data/waterCharities.js";
import { CardList } from '../CardList.js';
import { useRef, useState } from "react";
let temp = 0;

export default function DonationPage(props) {
  const [focus, setFocus] = useState('');

  const cards = charityContent.map(item => {
    temp = temp + 1;
    if (focus === '') { //default
      return (
        <CardList
          title={item.Name}
          field1={item['Mission Statement']}
          field2={item.Focus}
          field3={item.Website}
          key={temp}
        />
      )
    } else { //group by focus
      if (item.Focus === focus) {
        return (
          <CardList
            title={item.Name}
            field1={item['Mission Statement']}
            field2={item.Focus}
            field3={item.Website}
            key={temp}
          />
        )
      }
    }
  })

  return (
    <div className="background-page">
      <NavBar />
      <header className="page-title">
        <h1>Donation Page</h1>
      </header>
      <main>
        <DropSearch setter={setFocus} />

        <div className="card-list">
          {cards}
        </div>
      </main>
    </div>
  )
}