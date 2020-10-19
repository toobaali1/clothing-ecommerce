import React from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom";
import {ReactComponent as ReactLogo} from "./crown.svg";
import { auth } from "../../firebase/firebase.utils";
import {connect} from "react-redux";

const Header = ({currentUser}) =>{
    return(
        <div className="header">
        <div className="logo-container">
           <Link to="/"><ReactLogo /></Link>
        </div>

        <div className="options">

            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {currentUser?<div onClick={()=>auth.signOut()} className="option">SIGN OUT</div>:<Link to="/signin" className="option">SIGN IN</Link>}
            <Link to="/cart" className="option">CART</Link>
           

        </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);