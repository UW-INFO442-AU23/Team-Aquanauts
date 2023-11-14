import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardDetails } from "./CardDetails.js";

export function CardList(props) {
    const cardBox = props.card;

    return (
        <div className="card-list">
            <div className="card-container">
                <Link to="/location" className="card-link">
                    <div className="single-card-box">
                        <div className="card-text">
                            <h2 className="card-title">Location</h2>
                        </div>
                        <div className="card-image-box">
                            <img src="img/cat.png" alt="test image" className="card-image" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
