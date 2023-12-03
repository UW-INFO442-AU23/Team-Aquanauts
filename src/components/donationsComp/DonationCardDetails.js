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
        <div className="details-page">
            <NavBar />
            <div className="details-container">
                <div className="donation-back-button">
                    <button className="back-button"><NavLink to="/donations"  className="navlink-back">Back</NavLink></button>
                </div>
                <div className="location-name-text">
                    <h1 className="name-of-location">{name}</h1>
                </div>
                <div className="details-donation-info">
                    <div className="details-text-donations">
                        <p> <span className="bolded">Focus Area:</span> {focus}</p>
                        <p> <span className="bolded">Mission Statement:</span> {statement}</p>
                        <p> <span className="bolded">Beneficiary:</span> {beneficiary}</p>
                    </div>
                </div>
                <div className="donate-button">
                    <button className="donate-now-button" onClick={handleDonateNowClick}> Check Website & Donate Now!</button>
                    <p className="donate-redirect">(This will redirect you to an external site)</p>
                </div>
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