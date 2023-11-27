import React, { useState } from 'react';

export function CardDetails(props) {
    const cardDetails = props.details;

    return (
        <div className="details-container">
            <div className="location-name-text">
                <h1 className="name-of-location">{props.LOC_NAME}</h1>
            </div>
            <div className="details-image-box">
                <h2>{props.BASIN_NAME}</h2>
                <h2>{props.LOC_TYPE}</h2>
                <h2>{props.CITY}</h2>
            </div>
            <div className="fav-button">
                <button className="fav-location-button">Favorite this location!</button>
            </div>
        </div>
    )
}

export default CardDetails;