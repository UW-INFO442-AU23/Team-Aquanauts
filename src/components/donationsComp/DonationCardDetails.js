import NavBar from '../NavBar.js';
import {NavLink} from 'react-router-dom';
import { useParams } from 'react-router';
import { charityContent } from '../../data/waterCharities.js';

const DonationCardDetails = (props) => {
    
    return (
        <div className="details-container">
            <NavBar />
            <div className="location-back-button">
                <button className="back-button"><NavLink to="/donations">Back</NavLink></button>
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

export default DonationCardDetails;




/* New attempt below */

// export default function DonationCardDetails(props) {
//     const cardDetails = props.details;

//     let Name = "";
//     let Focus = "";
//     let Statement = "";
//     let Beneficiary = "";
//     let Website = "";

//     charityContent.map((item) => {
//         if (item.Name == props.Name) { 
//             Name == item.Name;
//             Statement = item['Mission Statement'];
//             Focus = item.Focus;
//             Beneficiary = item.Beneficiary;
//             Website = item.Website;
//         }
//     })

    

//     return (
//         <div className="details-container">
//             <NavBar />
//             <div className="location-back-button">
//                 <button className="back-button"><NavLink to="/donations">Back</NavLink></button>
//             </div>
//             <div className="location-name-text">
//                 <h1 className="name-of-location">{props.Name}</h1>
//             </div>
//             <div className="details-image-box">
//                 <p> Name: {Name} </p>
//                 <p> Mission Statement: {Statement}</p>    
//                 <p> Focus: {Focus} </p>
//                 <p> Beneficiary: {Beneficiary} </p>  
//                 <p> Website: {Website} </p>
//             </div>
//             <div className="fav-button">
//             <a href={props.Website}>
//                 <button className="fav-location-button">Donate Now!</button>
//             </a>
//             </div>
//         </div>
//     )
// }