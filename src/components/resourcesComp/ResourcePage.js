import React from 'react';
import SearchBar from '../SearchBar.js';
import { CardList } from '../CardList.js';
import NavBar from '../NavBar.js';
import { resourcesContent } from "../../data/filteredWaterResources.js";
let temp = 0; //each card needs its own key. this is a temporary fix. didnt want to mess with your code too much

const cards = resourcesContent.map(item => {
  temp = temp + 1;
  return (
    <CardList
        city={item.CITY}
        loc_name={item.LOC_NAME}
        GWMA={item.GWMA}
        BASIN_NAME={item.BASIN_NAME}
        key={temp} //part of the fix
    />
  )
})

// import json file
// import file from "../filteredWaterResources.json" with { type: "json"};
// console.log(file.filteredWaterResources);

// const fs = require('fs');
// const filePath = '../filteredWaterResources.json';
// const jsonData = fs.readFileSync(filePath, 'utf-8');
// const parsedData = JSON.parse(jsonData);
// console.log(parsedData.filteredWaterResources);

export default function ResourcePage(props) {
  return (
    <div className="background-page">
      <NavBar />
      <header>
        <h1>Resource Page</h1>
      </header>
      <main>
        <SearchBar/>
        {cards}
      </main>
    </div>
  )
}