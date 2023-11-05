import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/App.js';
import { BrowserRouter} from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjuffou8vJTIsBUiWXa1VBK-IoWxPhnJE",
  authDomain: "info442-aquanauts.firebaseapp.com",
  projectId: "info442-aquanauts",
  storageBucket: "info442-aquanauts.appspot.com",
  messagingSenderId: "810396337339",
  appId: "1:810396337339:web:29fa35dccb4d8b9b98159e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

