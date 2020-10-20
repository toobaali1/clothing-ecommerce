import React from "react";
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {toggleDropdownStatus} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const cartIcon = ({toggleDropdownStatus, itemCount}) => {
    return(
        <div className="cart-icon" onClick={()=>{toggleDropdownStatus(); }}>
            <ShoppingIcon className="shopping-icon" />
            <div className="item-count">{itemCount}</div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
    toggleDropdownStatus: ()=>{dispatch(toggleDropdownStatus())} 
});

export default connect(mapStateToProps,mapDispatchToProps)(cartIcon);