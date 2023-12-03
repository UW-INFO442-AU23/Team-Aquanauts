import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function DonationCardList(props) {

    const donation = props.title;

    return (
        <div className="card-container">
            <Link to={`/donation-details/${donation}`} className="card-link">
                <div className="single-card-box">
                    <div className="card-text">
                        <h2 className="card-name">{props.title}</h2>
                        <h2 className="card-statement">{props.field1}</h2>
                        <h2 className='card-focus'>{props.field2}</h2>
                        <h2 className='card-website'>{props.field3}</h2>
                    </div>
                    <div className="card-image-box">
                        <img src={props.img} alt="test image" className="card-image" />
                    </div>
                </div>
            </Link>
        </div>
    )
}
