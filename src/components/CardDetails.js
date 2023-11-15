import NavBar from './NavBar.js';
import {NavLink} from 'react-router-dom';

const CardDetails = (props) => {

    return (
        <div className="details-container">
            <NavBar />
            <div className="location-back-button">
                <button className="back-button"><NavLink to="/resources">Back</NavLink></button>
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