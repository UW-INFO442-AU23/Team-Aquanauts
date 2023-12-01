import React, { useState } from 'react';
import NavBar from '../NavBar.js';
import { NavLink, useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import { resourcesContent } from "../../data/filteredWaterResources.js";

const BASIN_IMG = {
    'South King County': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/south-king-gwma.jpeg?raw=true",
    'Other': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/bear-creek.jpeg?raw=true", /* probably find a better image for 'Other' */
    'East King County': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/east-king-county-gwma.jpeg?raw=true",
    'Issaquah Creek Valley': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/issaquah-valley-gwma.jpeg?raw=true",
    'Vashon-Maury Island': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/vashon-maury-gwma.jpeg?raw=true",
    'Redmond-Bear Creek Valley': "https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/bear-redmond-gwma.jpeg?raw=true"
}

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
    let zipCode = "";
    let locType = "";
    let basin = "";
    let basinImg = "";

    resourcesContent.map((item) => {
        if(item.LOC_NAME == urlParams.cardId) {
            locationName = urlParams.cardId;
            latitude = item.Y;
            longitude = item.X;
            zipCode = item.ZIPCODE;
            locType = item.LOC_TYPE;
            basin = item.BASIN_NAME;
            basinImg = BASIN_IMG[item.GWMA];
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
                <img src={basinImg} alt="test image" className="details-image" />
            </div>
            <div className="details-info">
                <p>Type of Basin: {basin}</p>
                <p>Location Zip Code: {zipCode}</p>
                <p>Type of Resource: {locType}</p>
            </div>
            <div className="google-maps-button">
                <button id="find-location-button" onClick={handleFindLocationClick}>Find Location on Maps!</button>
            </div>
        </div>
    )
}

//basin name
//