import React from "react";
import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import {connect} from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({cartItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
            {cartItems.map((cartItem)=>{
                return <CartItem key={cartItem.id} item={cartItem} />
            })}
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    );
}

const mapStateToProps = (state)=>({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);