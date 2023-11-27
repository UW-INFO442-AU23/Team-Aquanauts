import React from 'react';
import NavBar from '../NavBar.js';
import DropSearch from './DropSearch.js';
import { charityContent } from "../../data/waterCharities.js";
import { CardList } from '../CardList.js';
import { useState } from "react";
let temp = 0;

export default function DonationPage(props) {
  const [focus, setFocus] = useState('');
  const [beneficiaries, setBeneficiaries] = useState('');

  const cards = charityContent.map(item => {
    temp = temp + 1;
    if (focus === '' && beneficiaries === '') { //default
      return (
        <CardList
          title={item.Name}
          field1={item['Mission Statement']}
          field2={item.Focus}
          field3={item.Website}
          key={temp}
        />
      )
    } else { //not default
      if (focus !== '' && beneficiaries !== '') { //filter by both
        if (item.Focus === focus && item.Beneficiary === beneficiaries) {
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
      } else if (focus === '') { //filter beneficiaries only
        if (item.Beneficiary === beneficiaries) { //filter by both
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
      } else { //filter focuses only
        if (item.Focus === focus) { //filter by both
          if (item.Focus === focus && item.Beneficiary === beneficiaries) {
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
        <DropSearch setFocus={setFocus} type='focuses' />
        <DropSearch setBeneficiaries={setBeneficiaries} type='beneficiaries' />

        <div className="card-list">
          {cards}
        </div>
      </main>
    </div>
  )
}