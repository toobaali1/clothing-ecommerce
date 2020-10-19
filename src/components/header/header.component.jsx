import React from "react";
import "./header.styles.scss";

import {ReactComponent as ReactLogo} from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {Link} from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import {connect} from "react-redux";

const Header = ({currentUser, currentDropdownStatus}) =>{
    return(
        <div className="header">
            <div className="logo-container">
            <Link to="/"><ReactLogo /></Link>
            </div>

            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/contact" className="option">CONTACT</Link>
                {currentUser?<div onClick={()=>auth.signOut()} className="option">SIGN OUT</div>:<Link to="/signin" className="option">SIGN IN</Link>}
                <CartIcon />
                
            </div>

           {currentDropdownStatus && <CartDropdown />}

        </div>
    )
}



const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    currentDropdownStatus: state.cart.currentDropdownStatus 
})

export default connect(mapStateToProps)(Header);