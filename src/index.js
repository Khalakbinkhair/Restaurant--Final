import React, { useEffect,useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useHistory } from "react-router-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';


import Home  from './Components/Home/home';


axios.defaults.baseURL="http://192.168.68.107:8080/api/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 

 <Router>
      <Routes>
      <Route  exact path="/:id"    element={<Home />} />
   
     


 
    </Routes>
    </Router>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
