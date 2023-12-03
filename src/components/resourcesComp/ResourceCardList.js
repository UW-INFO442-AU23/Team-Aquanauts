import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resourcesContent } from "../../data/filteredWaterResources.js";

export function ResourceCardList(props) {

    const location = props.field1;

    return (
        <div className="card-container">
            <Link to={`/resource-details/${location}`} className="card-link" style={{ textDecoration: 'none' }}>
                <div className="single-card-box">
                    <div className="card-text">
                        <h2 className="card-title">{props.title}</h2>
                        <h2 className="card-city">{props.field1}</h2>
                        <h2 className='card-zipcode'>Zip: {props.field2}</h2>
                        <h2 className='card-type'>Type: {props.field3}</h2>
                    </div>
                    <div className="card-image-box">
                        <img src={props.img} alt="image of the location of the water resource" className="card-image" />
                    </div>
                </div>
            </Link>
        </div>
    )
}
