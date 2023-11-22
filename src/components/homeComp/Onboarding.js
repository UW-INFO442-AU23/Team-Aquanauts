import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import '../../index.css';
import HomePage from './HomePage.js';

export default function Onboarding(props) {

  return (
    <div className="background-onboard">
      <header>
        <h1 className="header">the AquaPod</h1>
      </header>
      <main>
      <h2 className="sub-header">Mission Statement</h2>
        <p>Our goal is to promote water and sanitation access in King County. We want to educate the people of King County 
          on water facilities to ensure that they can locate necessary sanitation resources as well as opportunities to donate.
          Our mission supports the United Nations SDG of Clean Water and Sanitation by making it easy for people to educate themselves on
          water scarcity and hygiene as well as find free water resources and opportunities to donate to charities that share our 
          goals. We have 3 different aquanauts that each correspond to a different water & sanitation goal: education, resources,
          and donations. You can switch between aquanauts at any time using the navigation menu. </p>
        <h2 className="sub-header">Resource Aquanaut</h2>
          <p>As a resource aquanaut, you will be able to find all the facilities that provide access to free water resources
            in King County. You can search by zip code to find the facilities closest to you and find more details about the resources,
            such as type of facility and what city it is located in.
          </p>
        <h2 className="sub-header">Donation Aquanaut</h2>
          <p>As a Donation aquanaut, you will be able to see the major charities across the country that focus on promoting
            access to clean water and sanitation. You can search by beneficiary, specific focus area, and region as well as find 
            information about their mission statement and goals. 
          </p>
        <h2 className="sub-header">Education Aquanaut</h2>
          <p>As an Education aquanaut, you can look through statistics, pictures, and videos about water access, scarcity,
            and sanitation in King County. We also have links that will direct you to more detailed sites to learn more about 
            specific water access and hygiene issues. 
          </p>
        
        <h2 className="sub-header">What to get on board? Are you a...</h2>
        <div className="button-links">
          <div className="d-flex flex-column w-25 mx-auto">
            <Link to='/home' className="btn btn-info btn-lg mb-5 mt-5 nav-link">New Aquanaut</Link>
            <Link to='/home' className="btn btn-info btn-lg mb-5 nav-link">Existing Aquanaut</Link>
          </div>
        </div>
      </main>
    </div>
  )
}