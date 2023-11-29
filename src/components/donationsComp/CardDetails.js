import NavBar from '../NavBar.js';
import {NavLink} from 'react-router-dom';

const CardDetails = (props) => {

    return (
        <div className="details-container">
            <NavBar />
            <div className="location-back-button">
                <button className="back-button"><NavLink to="/resources">Back</NavLink></button>
            </div>
            <div className="location-name-text">
                <h1 className="name-of-location">{props.Name}</h1>
            </div>
            <div className="details-image-box">
                <h2>{props.Approach}</h2>
                <h2>{props.Focus}</h2>
                <h2>{props.Beneficiary}</h2>
                <p>{props["Mission Statement"]}</p>
                <p>{props["Role in US WaSH Sector"]}</p>
            </div>
            <div className="fav-button">
            <a href={props.Website}>
                <button className="fav-location-button">Donate Now!</button>
            </a>
            </div>
        </div>
    )
}

export default CardDetails;