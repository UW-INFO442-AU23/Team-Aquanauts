import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resourcesContent } from "../../data/filteredWaterResources.js";

export function ResourceCardList(props) {

    const data = { resourcesContent };

    return (
        <div className="card-container">
            <Link to={`/resource-details/${data.LOC_NAME}`} className="card-link">
                <div className="single-card-box">
                    <div className="card-text">
                        <h2 className="card-title">{props.title}</h2>
                        <h2 className="card-city">{props.field1}</h2>
                        <h2 className='card-zipcode'>{props.field2}</h2>
                        <h2 className='card-basin-name'>{props.field3}</h2>
                    </div>
                    <div className="card-image-box">
                        <img src={props.img} alt="test image" className="card-image" />
                    </div>
                </div>
            </Link>
        </div>
    )
}
