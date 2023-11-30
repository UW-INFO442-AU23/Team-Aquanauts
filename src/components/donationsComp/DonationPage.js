import React from 'react';
import NavBar from '../NavBar.js';
import DropSearch from './DropSearch.js';
import { charityContent } from "../../data/waterCharities.js";
import { CardList } from '../CardList.js';
import { useState } from "react";

export default function DonationPage(props) {
  const [focus, setFocus] = useState('');
  const [beneficiaries, setBeneficiaries] = useState('');
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(25);
  let total = 0;

  function getWordCount(str) {
    return str.split(' ')
      .filter(function(n) { return n != '' })
      .length;
  }

  function cardMethod(name, statement, focus, website, key) {
    return (
      <CardList
        title={name}
        field1={statement}
        field2={focus}
        field3={website}
        key={key}
      />
    );
  }

  const cards = charityContent.map(item => {
    let statement = item['Mission Statement'];
    if (getWordCount(statement) > 5) {
      let statementList = statement.split(" ");
      statement = '' + statementList[0] + ' ' + statementList[1] + ' ' + statementList[2] + ' ' + statementList[3] + ' ' + statementList[4] + '...';
    }

    if (focus === '' && beneficiaries === '') { //default
      return cardMethod(item.Name, item.Focus, item.Beneficiary, statement, item.Name);
    } else { //not default
      if (focus !== '' && beneficiaries !== '') { //filter by both
        if (item.Focus === focus && item.Beneficiary === beneficiaries) {
          return cardMethod(item.Name, item.Focus, item.Beneficiary, statement, item.Name);
        }
      } else if (focus === '') { //filter beneficiaries only
        if (item.Beneficiary === beneficiaries) {
          return cardMethod(item.Name, item.Focus, item.Beneficiary, statement, item.Name);
        }
      } else { //filter focuses only
        if (item.Focus === focus) {
          return cardMethod(item.Name, item.Focus, item.Beneficiary, statement, item.Name);
        }
      }
    }
  })

  const updatedCards = cards.filter(function (item) {
      return item !== undefined;
  });
  total = updatedCards.length;

  function forward() {
    if (!((minIndex+25) > maxIndex)) {
      setMinIndex(maxIndex);
    }
    if ((maxIndex+25) > total) {
      setMaxIndex(total)
    } else {
      setMaxIndex(maxIndex + 25);
    }
  }

  function backward() {
    if (!((minIndex-25) < 0)) {
      setMaxIndex(minIndex);
      setMinIndex(minIndex-25);
    }
  }

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
          {updatedCards.slice(minIndex, maxIndex)}
        </div>
        <p>displaying cards {minIndex + 1} to {maxIndex} of {updatedCards.length}</p>
        <button onClick={backward}>Previous 25</button>
        <button onClick={forward} >Next 25</button>
      </main>
    </div>
  )
}