import React from 'react';
import { useRef, useState } from "react";
const ZIPCODES = ["98001", "98002", "98003", "98004", "98005", "98006", "98007", "98008", "98009", "98010",
  "98011", "98013", "98014", "98015", "98019", "98022", "98023", "98024", "98025", "98027", "98028", "98029",
  "98030", "98031", "98032", "98033", "98034", "98035", "98038", "98039", "98040", "98041", "98042", "98045",
  "98047", "98050", "98051", "98052", "98053", "98054", "98055", "98056", "98057", "98058", "98059", "98062",
  "98063", "98064", "98065", "98068", "98070", "98071", "98072", "98073", "98074", "98075", "98083", "98092",
  "98093", "98101", "98102", "98103", "98104", "98105", "98106", "98107", "98108", "98109", "98111", "98112",
  "98114", "98115", "98116", "98117", "98118", "98119", "98121", "98122", "98124", "98125", "98126", "98131",
  "98132", "98133", "98134", "98136", "98138", "98144", "98145", "98146", "98148", "98154", "98155", "98158",
  "98160", "98161", "98164", "98166", "98168", "98171", "98174", "98177", "98178", "98188", "98198", "98199",
  "98224", "98288"];

export default function SearchBar(props) {
  const [query, setQuery] = useState('');
  const [errorBool, setErrorBool] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
    if (queryString.length === 5 || queryString.length === 10) { // it is 5 or 10 characters
      //ten digit route
      if (queryString.length === 10) {
        if (queryString[5] !== "-") {
          setErrorBool(true);
          setErrorMessage("Your query is not formatted correctly (hypen not present or in the wrong place)");
        } else {
          checkNumeric(queryString.substring(0, 5), queryString.substring(6, queryString.length));
        }
        //if passes here, query is 10 digits long and has a hyphen
      } else { //five digit route
        checkNumeric(queryString, null);
      }
    } else { // not 5 or 10 digits long
      setErrorBool(true);
      setErrorMessage("The query you entered is not the right length. Please enter a five or nine digit zipcode.");
    }
  }

  //returns true if it is a valid number
  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  //check that all parts of the query are numerical
  function checkNumeric(firstHalf, secondHalf) {
    if (secondHalf === null) { //five digit route
      if (isNumeric(firstHalf)) { // just numbers
        checkZip(firstHalf);
      } else { //contains something other than numbers
        setErrorBool(true);
        setErrorMessage("Your query has characters in it other than numbers and a hyphen, please try again.");
      }
    } else { //ten digit route
      if (isNumeric(firstHalf) && isNumeric(secondHalf)) { //both are just numbers
        if (secondHalf.toString() !== "0000") {
          checkZip(firstHalf);
        }
      } else { //either has something other than a number
        setErrorBool(true);
        setErrorMessage("Your query has characters in it other than numbers and a hyphen, please try again.");
      }
    }
  }

  //check that query is a valid zipcode
  function checkZip(zip) {
    if (ZIPCODES.includes(zip)) {
      setErrorBool(false);
      props.setZipcode(zip);
    } else {
      setErrorBool(true);
      setErrorMessage("The zipcode you entered does not fit the scope of this website. Please enter a King County zipcode for related locations.");
    }
  }

  function DisplayError() {
    if (errorBool) {
      return (
        <div>
          <h2>Could not complete query</h2>
          <p>{errorMessage}</p>
        </div>
      )
    }
  }

  const ref2 = useRef(null);

  return (
    <div>
      <input className="text-specificity" id="text-input" placeholder="Enter a zipcode" value={query} type="search" onChange={handleChange} />
      <div className="btn btn-primary" id="apply-search" ref={ref2} onClick={handleSearch}>search!</div>
      <DisplayError />
    </div>
  )
}