import React from 'react';

export default function DropSearch(props) {

  function update(event) {
    props.setter(event.target.textContent);
  }

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        Filter by Focus
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><button className="dropdown-item" onClick={update} >Wastewater</button></li>
        <li><button className="dropdown-item" onClick={update} >Water Quality</button></li>
        <li><button className="dropdown-item" onClick={update} >Water Access</button></li>
        <li><button className="dropdown-item" onClick={update} >Affordability</button></li>
        <li><button className="dropdown-item" onClick={update} >Infrastructure</button></li>
      </ul>
    </div>
  )
}