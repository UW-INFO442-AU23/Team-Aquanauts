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

    //returns true if it is a valid number
    function isNumeric(value) {
      return /^-?\d+$/.test(value);
    }

    // checking if query is five or ten characters long
    if (queryString.length != 5) { // anything other than 5 or ten digits long
      console.log("query is not the right length")
    } else { // exactly five or ten digits long
      console.log("hi");
      //ten digit route
      if (queryString.length == 10) {
        if (!queryString.includes("-")) {
          console.log("query not formatted correctly")
        } else {
          // format it so it is just the numbers without the hyphen. ex. from 12345-6789 to 123456789
        }
        //if passes here, query is 10 digits long and has a hyphen
      }

      // checking to make sure query is comprised of only numbers
      if (!isNumeric(queryString)) { // has something other than letters
        console.log("query contains characters other than numbers");
      } else { // query only has numbers
        // check if last four digits of the nine digit zip codes is not 0000. all other number options are possible
        if (ZIPCODES.includes(queryString)) {
          console.log("included in array");
        } else {
          console.log("not included in array")
        }
      }
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