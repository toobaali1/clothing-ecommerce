import React from "react";
import "./header.styles.scss";
import {withRouter} from "react-router-dom";
import {ReactComponent as ReactLogo} from "./crown.svg";

const Header = ({history,match}) =>{
    return(
        <div className="header">
        <div className="logo-container">
           <ReactLogo />
        </div>

        <div className="options">

            <p onClick={()=>{history.push(`${match.url}shop`)}} className="option">SHOP</p>
            <p className="option">CONTACT</p>
            <p className="option">SIGN IN</p>
            <p className="option">CART</p>

        </div>
            
        </div>
    )
}

export default withRouter(Header);