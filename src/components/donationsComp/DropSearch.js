import React from 'react';
const focuses = ['Wastewater', 'Water Quality', 'Water Access', 'Affordability', 'Infrastructure', 'Law & Policy', 'Technology Adv', 'Hygiene', 'Public Health'];
const beneficiaries = ['Households', 'Implementing Organizations', 'Impacted Communities', 'Local & State Government', 'Unhoused Communities', 'Environment', 'Utilities', 'Schools', 'General Public', 'Federal Government', ''];
let temp = 100000;

export default function DropSearch(props) {
  let filterMessage = '';
  if (props.type === "focuses") {
    filterMessage = 'Filter by Focus';
  } else {
    filterMessage = 'Filter by Beneficiary';
  }

  function update(event) {
    if (props.type === "focuses") {
      props.setFocus(event.target.textContent);
    } else {
      props.setBeneficiaries(event.target.textContent);
    }
  }

  let options = [];
  if (props.type === 'focuses') {
    options = focuses.map(item => {
      temp = temp + 1;
      return (
        <li><button key={temp} className="dropdown-item" onClick={update} >{item}</button></li>
      );
    })
  } else {
    options = beneficiaries.map(item => {
      temp = temp + 100
      return (
        <li><button key={temp} className="dropdown-item" onClick={update} >{item}</button></li>
      );
    })
  }

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        {filterMessage}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {options}
      </ul>
    </div>
  )
}