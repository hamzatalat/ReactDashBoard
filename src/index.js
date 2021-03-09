import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import sideBar from './sidebar/sideBar.js';
import header from './header/header.js';
import dashboard from './dashboard/dashboard.js';

import { Route,  BrowserRouter as Router } from 'react-router-dom'



const routing = (
  <Router>
      <Route exact path="/" component={dashboard} />
     
  </Router>
)



ReactDOM.render(
	<div >{routing}
  <header/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
