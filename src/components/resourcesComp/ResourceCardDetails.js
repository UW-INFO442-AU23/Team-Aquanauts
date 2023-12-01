import React, { useState } from 'react';
import NavBar from '../NavBar.js';
import { NavLink, useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import { resourcesContent } from "../../data/filteredWaterResources.js";

function redirectToGoogleMaps(latitude, longitude) {
    var mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapsUrl, '_blank');
}


export default function ResourceCardDetails(props) {
    const cardDetails = props.details;
    const urlParams = useParams();

    let locationName = "";
    let latitude = "";
    let longitude = "";

    resourcesContent.map((item) => {
        if(item.LOC_NAME == urlParams.cardId) {
            locationName = urlParams.cardId;
            latitude = item.Y;
            longitude = item.X;
        }
    })

    const handleFindLocationClick = () => {
        redirectToGoogleMaps(latitude, longitude);
    }


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
            <div className="details-info">
                <button id="find-location-button" onClick={handleFindLocationClick}>Find Location on Maps!</button>
            </div>
        </div>
    )
}

//basin name
//