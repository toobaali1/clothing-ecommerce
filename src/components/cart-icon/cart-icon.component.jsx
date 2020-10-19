import React from "react";
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {toggleDropdownStatus} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const cartIcon = ({toggleDropdownStatus}) => {
    return(
        <div className="cart-icon" onClick={()=>{toggleDropdownStatus(); }}>
            <ShoppingIcon className="shopping-icon" />
            <div className="item-count">0</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    toggleDropdownStatus: ()=>{dispatch(toggleDropdownStatus())} 
});

export default connect(null,mapDispatchToProps)(cartIcon);