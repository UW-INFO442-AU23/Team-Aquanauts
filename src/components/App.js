import React, { Component } from 'react';
import { 
  Routes, 
  Route, 
  Navigate, 
  BrowserRouter as Router, 
  Link, 
  useParams, NavLink
} from 'react-router-dom'
import HomePage from './homeComp/HomePage.js';
import ResourcePage from './resourcesComp/ResourcePage.js';
import DonationPage from './donationsComp/DonationPage.js';
import EducationPage from './educationComp/EducationPage.js';
import withSplashScreen from './withSplashScreen';
import CardDetailsPage from "./CardDetails.js";
import Onboarding from './homeComp/Onboarding.js';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="home" element={<HomePage />} />
            <Route path="resources" element={<ResourcePage />} />
            <Route path="donations" element={<DonationPage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="location" element={<CardDetailsPage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
      </Router>
  
    );
  }
  
}

export default withSplashScreen(App);
