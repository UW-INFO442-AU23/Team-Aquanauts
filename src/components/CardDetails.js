import React, { useState } from 'react';
import NavBar from './NavBar.js';

const CardDetails = (props) => {
    const cardDetails = props.details;

    return (
        <div className="details-container">
            <NavBar />
            <div className="location-back-button">
                <button className="back-button">Back</button>
            </div>
            <div className="location-name-text">
                <h1 className="name-of-location">Name of Location</h1>
            </div>
            <div className="details-image-box">
                <div className="details-image-backbox"></div>
                <div className="details-image-img">
                    <img src="img/cat.png" alt="test image" className="details-image" />
                </div>
            </div>
            <div className="fav-button">
                <button className="fav-location-button">Favorite this location!</button>
            </div>
        </div>
    )
}

export default CardDetails;