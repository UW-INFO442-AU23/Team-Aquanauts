import NavBar from '../NavBar.js';
import {NavLink} from 'react-router-dom';
import { useParams } from 'react-router';
import { charityContent } from '../../data/waterCharities.js';

function redirectToDonation(weblink) {
    var donateUrl = weblink;
    window.open(donateUrl, '_blank');
}


const DonationCardDetails = (props) => {
    const cardDetails = props.details;
    const urlParams = useParams();

     let name = "";
     let focus = "";
     let statement = "";
     let beneficiary = "";
     let website = "";

     charityContent.map((item) => {
         if (item.Name == urlParams.cardId) { 
             name = urlParams.cardId;
             statement = item['Mission Statement'];
             focus = item.Focus;
             beneficiary = item.Beneficiary;
             website = item.Website;
         }
     })

    const handleDonateNowClick = () => {
        redirectToDonation(website);
    }


    return (
        <div className="details-container">
            <NavBar />
            <div className="location-back-button">
                <button className="back-button"><NavLink to="/donations">Back</NavLink></button>
            </div>
            <div className="location-name-text">
                <h1 className="name-of-location">{name}</h1>
            </div>
            <div className="details-text">
                <p>{focus}</p>
                <p>{statement}</p>
                <p>{beneficiary}</p>
                <p>{website}</p>
            </div>
            <div className="fav-button">
            <a href={website}>
                <button className="fav-location-button" onClick={handleDonateNowClick}>Donate Now!</button>
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