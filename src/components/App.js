import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'
import {HomePage} from './HomePage.js';
import {ResourcePage} from './ResourcePage.js';
import {DonationPage} from './DonationPage.js';
import {EducationPage} from './EducationPage.js';

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