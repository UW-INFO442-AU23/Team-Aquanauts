import React, { useState } from 'react';
import NavBar from '../NavBar.js';
import { NavLink, useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import { resourcesContent } from "../../data/filteredWaterResources.js";


export default function ResourceCardDetails(props) {
    const cardDetails = props.details;
    const urlParams = useParams();

    let locationName = "it is not working";

    //this is not working
    const resourceDetails = resourcesContent.map((item) => {
        if(item.LOC_NAME == urlParams.field1) {
            locationName = item.LOC_NAME;
        }
    })


    return (
        <div className="details-container">
            <NavBar />
            <div className="location-back-button">
                <button className="back-button"><NavLink to="/resources">Back</NavLink></button>
            </div>
            <div className="location-name-text">
                <h1 className="name-of-location">{locationName}</h1>
            </div>
            <div className="details-image-box">
                <h2>{locationName}</h2>
                
            </div>
        </div>
    )
}