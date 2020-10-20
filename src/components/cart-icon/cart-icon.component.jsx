import React from "react";
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {toggleDropdownStatus} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const cartIcon = ({toggleDropdownStatus, itemCount}) => {
    return(
        <div className="cart-icon" onClick={()=>{toggleDropdownStatus(); }}>
            <ShoppingIcon className="shopping-icon" />
            <div className="item-count">{itemCount}</div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
    toggleDropdownStatus: ()=>{dispatch(toggleDropdownStatus())} 
});

export default connect(mapStateToProps,mapDispatchToProps)(cartIcon);