import React from 'react';
import { useRef, useState } from "react";
const ZIPCODES = ["10001", "10002", "10003"];

export default function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearch = (event) => {
    let queryString = query.toString();
    checkLengthAndFormat(queryString);
  }

  // checks that query is correct length and formatted correctly
  function checkLengthAndFormat(queryString) {
    // checking if query is five or ten characters long
    if (queryString.length == 5 || queryString.length == 10) { // it is 5 or 10 characters
      //ten digit route
      if (queryString.length == 10) {
        if (queryString[5] != "-") {
          console.log("query is not formatted correctly (hypen not present or in the wrong place)");
        } else {
          checkNumeric(queryString.substring(0, 5), queryString.substring(6, queryString.length));
        }
        //if passes here, query is 10 digits long and has a hyphen
      } else { //five digit route
        checkNumeric(queryString, null);
      }
    } else { // not 5 or 10 digits long
      console.log("query is not the right length");
    }
  }

  //returns true if it is a valid number
  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  //check that all parts of the query are numerical
  function checkNumeric(firstHalf, secondHalf) {
    if (secondHalf == null) { //five digit route
      if (isNumeric(firstHalf)) { // just numbers
        checkZip(firstHalf);
      } else { //contains something other than numbers
        console.log("query has characters other than numbers");
      }
    } else { //ten digit route
      if (isNumeric(firstHalf) && isNumeric(secondHalf)) { //both are just numbers
        if (secondHalf.toString() != "0000") {
          checkZip(firstHalf);
        }
      } else { //either has something other than a number
        console.log("query has characters other than numbers");
      }
    }
  }

  //check that query is a valid zipcode
  function checkZip(zip) {
    if (ZIPCODES.includes(zip)) {
      console.log("zip is in array");
    } else {
      console.log("zip is not in array");
    }
  }

  const ref2 = useRef(null);

  return (
    <div>
      <input className="text-specificity" id="text-input" placeholder="Enter a zipcode" value={query} type="search" onChange={handleChange} />
      <div className="btn btn-white" id="apply-search" ref={ref2} onClick={handleSearch}>search!</div>
    </div>
  )
}