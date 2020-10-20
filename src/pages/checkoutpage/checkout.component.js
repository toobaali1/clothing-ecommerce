import React from "react";
import "./checkout.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({cartItems, totalPrice}) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
               <div className="header-block">
                   <span>Product</span>
               </div>
               <div className="header-block">
                   <span>Description</span>
               </div>
               <div className="header-block">
                   <span>Quantity</span>
               </div>
               <div className="header-block">
                   <span>Price</span>
               </div>
               <div className="header-block">
                   <span>Remove</span>
               </div>
            </div>

           {
               cartItems.map((item)=>{
                   return <CheckoutItem key={item.id} item={item} />
               })
           }
            

            <div className="total">
                <span>TOTAL: ${totalPrice}</span>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);