import React, { useState } from 'react';

export function CardDetails(props) {
    const cardDetails = props.details;

    return (
        <div className="details-container">
            <div className="location-name-text">
                <h1 className="name-of-location">Name of Location</h1>
            </div>
            <div className="details-image-box">
                <img src="img/cat.png" alt="test image" className="details-image"/>
            </div>
            <div className="fav-button">
                <button className="fav-location-button">Favorite this location!</button>
            </div>
        </div>
    )
}