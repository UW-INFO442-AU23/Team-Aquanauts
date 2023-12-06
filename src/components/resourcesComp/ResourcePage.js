import React from 'react';
import SearchBar from '../SearchBar.js';
import { ResourceCardList } from './ResourceCardList.js';
import NavBar from '../NavBar.js';
import { resourcesContent } from "../../data/filteredWaterResources.js";
import { useRef, useState } from "react";
let temp = 0;
const BASIN_IMG = {
  'South King County': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/south-king-gwma.jpeg?raw=true",
  'Other': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/bear-creek.jpeg?raw=true", /* probably find a better image for 'Other' */
  'East King County': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/east-king-county-gwma.jpeg?raw=true",
  'Issaquah Creek Valley': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/issaquah-valley-gwma.jpeg?raw=true",
  'Vashon-Maury Island': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/vashon-maury-gwma.jpeg?raw=true",
  'Redmond-Bear Creek Valley': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/bear-redmond-gwma.jpeg?raw=true"
}

export default function ResourcePage(props) {
  const [searchZip, setSearchZip] = useState('');
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(25);
  let total = 0;

  const cards = resourcesContent.map(item => {
    temp = temp + 1;
    if (searchZip.length === 0) { //default
      return (
        <ResourceCardList
            title={item.CITY}
            field1={item.LOC_NAME}
            field2={item.ZIPCODE}
            field3={item.BASIN_NAME}
            key={temp}
            img={BASIN_IMG[item.GWMA]}
        />
      )
    } else { //searching a zipcode
      if (searchZip == item.ZIPCODE) {
        return (
          <ResourceCardList
              title={item.CITY}
              field1={item.LOC_NAME}
              field2={item.ZIPCODE}
              field3={item.LOC_TYPE}
              key={temp}
              img={BASIN_IMG[item.GWMA]}
          />
        )
      }
    }
  })

  const updatedCards = cards.filter(function (item) {
    return item !== undefined;
});
total = updatedCards.length;
if (total < maxIndex) {
  setMaxIndex(total);
}

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
        <h1 className="page-header">Resource Page</h1>
        <p className="page-desc">Find your nearest resource location!</p>
      </header>
      <main>
        <div className="search-bar">
          <div className="search-title">
            <p>Search by zipcode!</p>
          </div>
          <SearchBar setZipcode={setSearchZip} setMin={setMinIndex} setMax={setMaxIndex} />
        </div>

        <div className="card-list">
        {updatedCards.slice(minIndex, maxIndex)}
        </div>
        <div className="card-cycle">
          <p className="displaying-cards">Displaying cards {minIndex + 1} to {maxIndex} of {updatedCards.length}</p>
          <button className="btn btn-primary" id="previous-button" onClick={backward}>Previous 25</button>
          <button className="btn btn-primary" id="next-button" onClick={forward} >Next 25</button>
        </div>
      </main>
    </div>
  )
}