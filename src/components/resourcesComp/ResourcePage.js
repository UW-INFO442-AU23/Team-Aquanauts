import React from 'react';
import SearchBar from '../SearchBar.js';
import { CardList } from '../CardList.js';
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

  const cards = resourcesContent.map(item => {
    temp = temp + 1;
    if (searchZip.length === 0) { //default
      return (
        <CardList
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
          <CardList
              title={item.CITY}
              field1={item.LOC_NAME}
              field2={item.ZIPCODE}
              field3={item.BASIN_NAME}
              key={temp}
              img={BASIN_IMG[item.GWMA]}
          />
        )
      }
    }
  })

  return (
    <div className="background-page">
      <NavBar />
      <header className="page-title">
        <h1>Resource Page</h1>
      </header>
      <main>
        <div className="search-bar">
          <div className="search-title">
            <p>Search by zipcode!</p>
          </div>
          <SearchBar setZipcode={setSearchZip} />
        </div>

        <div className="card-list">
          {cards}
        </div>

      </main>
    </div>
  )
}