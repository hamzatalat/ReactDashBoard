import React from "react";
import { withRouter } from "react-router";
import './CardsStyle.css'
const Side = props => {
   

    return (
        <div class= "row" >
            <div class = "col-sm-2">
            <div class="rectangle">
                <center><h5 class= "TextHeading">
                    Listeners
                </h5></center>
                <center><h1>
                    3.6M
                </h1></center>
            </div>
            </div>
            <div class = "col-sm-2">
            <div class="rectangle">
                <center><h5 class= "TextHeading">
                    New This Week
                </h5></center>
                <center><h1>
                    16
                </h1></center>
            </div>
            </div>

            <div class = "col-sm-2">
            <div class="rectangle">
                <center><h5 class= "TextHeading">
                    Mentors
                </h5></center>
                <center><h1>
                    43
                </h1></center>
            </div>
            </div>

            <div class = "col-sm-2">
            <div class="rectangle">
                <center><h5 class= "TextHeading">
                    Pro plan
                </h5></center>
                <center><h1>
                    64
                </h1></center>
            </div>
            </div>
            
        </div>
            
        );
  };
  const Cards = withRouter(Side);
  export default Cards