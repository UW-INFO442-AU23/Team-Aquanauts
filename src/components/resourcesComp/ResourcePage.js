import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar.js';
import { CardList } from '../CardList.js';
import '../../index.css';
import NavBar from '../NavBar.js';
import { resourcesContent } from "../../data/filteredWaterResources.js"
const CARDINFO = [
  {locName: 'loc1', pic: '', }
];
// import json file 
// import file from "../filteredWaterResources.json" with { type: "json"};
// console.log(file.filteredWaterResources);

const fs = require('fs');
const filePath = '../filteredWaterResources.json';
const jsonData = fs.readFileSync(filePath, 'utf-8');
const parsedData = JSON.parse(jsonData);
console.log(parsedData.filteredWaterResources);

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
        
        <CardList />
      </main>
    </div>
  )
}