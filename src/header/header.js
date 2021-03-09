import React from "react";
import { withRouter } from "react-router";
import './header.css'

const header = props => {


    return (
        <div class="container-fluid">
            <div class="row header-bg" >
                <div class="col-sm-12">
                    <input class="form-control" type="text" placeholder= "Global Search"  id = "search-bar" >
                    </input>
                </div>
            </div>
        </div>

    );
};
const Header = withRouter(header);
export default Header