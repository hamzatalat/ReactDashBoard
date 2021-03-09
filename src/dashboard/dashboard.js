import React from "react";
import { withRouter } from "react-router";
import './dashboardStyle.css'
import SideBar from '../sidebar/sideBar.js';
import Header from '../header/header.js';
const Side = props => {
   

    return (
        <div class = "col-sm-">
            <SideBar/>
            <Header/>
        </div>
            
        );
  };
  const dashboard = withRouter(Side);
  export default dashboard