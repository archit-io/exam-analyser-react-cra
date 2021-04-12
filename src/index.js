import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

//import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import NavBarC from './components/navBarC';
import Hero from './components/hero';
import BlockDomain from './components/blockDomain';
import BlockPlan from './components/blockPlan';
import BlockFeatures from './components/blockFeatures';
import BlockShowcase from './components/blockShowcase';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
