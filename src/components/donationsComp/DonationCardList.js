import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function DonationCardList(props) {

    const donation = props.title;

    return (
        <div className="card-container">
            <Link to={`/donation-details/${donation}`} className="card-link" style={{ textDecoration: 'none' }}>
                <div className="single-card-box-donations">
                    <div className="card-text-donations">
                        <h2 className="card-name">{props.title}</h2>
                        <h2 className='card-focus'>Focus: {props.field1}</h2>
                        <h2 className='card-approach'>Approach: {props.field2}</h2>
                    </div>
                    {/* <div className="card-image-box">
                        <img src={props.img} alt="test image" className="card-image" />
                    </div> */}
                </div>
            </Link>
        </div>
    )
}
