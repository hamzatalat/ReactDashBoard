import React from "react";
import { withRouter } from "react-router";
import './sideBarStyle.css'
import logo from './picture1.png';

const Side = props => {
   

    return (
        
        <div class= 'container'>
            <div class = "heading">Bellona</div>
            <hr
                style={{
                    color: 'grey',
                    backgroundColor: 'grey',
                    height: 0.1,
                    marginTop:20,
                }}
            />
            <div class = "pictureContainer">
                <img src={logo} alt="Profile picture" />
                <div class = "NameField">Jazz Tinyiko</div>
                <div class = "emailField">j.tinyiko@bellona.com</div>
            </div>
            <div class = "ButtonsContainer">
                
            <div class = "buttons"><button class="btn"> Home</button></div>
            <div class = "buttons"><button class="btn"> Home</button></div>
            <div class = "buttons"><button class="btn"> Home</button></div>
            <div class = "buttons"><button class="btn"> Home</button></div>
            
            </div>
            
            <hr
                style={{
                    color: 'grey',
                    backgroundColor: 'grey',
                    height: 0.1,
                    marginTop:'4em',
                }}
            />
            <div class = "buttons"><button class="btn"> Home</button></div>
            <div class = "togglebutton"><button class="btn"> Home</button></div>
            
        </div>
            
        );
  };
  const SideBar = withRouter(Side);
  export default SideBar