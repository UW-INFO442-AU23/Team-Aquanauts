import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './homeComp/HomePage.js';
import ResourcePage from './resourcesComp/ResourcePage.js';
import DonationPage from './donationsComp/DonationPage.js';
import EducationPage from './educationComp/EducationPage.js';

export function App(props) {
  return (
    <Routes>
      <Route path="home" element={<HomePage/>}/>
      <Route path="resources" element={<ResourcePage/>}/>
      <Route path="donations" element={<DonationPage/>}/>
      <Route path="education" element={<EducationPage/>}/>
      <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
  )
}