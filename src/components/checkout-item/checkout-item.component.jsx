import React from "react";
import "./checkout-item.styles.scss";

import {connect} from "react-redux";
import {addItem, decreaseItem,removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({item,dispatch}) => {
    const {imageUrl,name,quantity,price} = item;

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
                <span className="decrease-button" onClick={()=> dispatch(decreaseItem(item))}>&lt; </span>
                {quantity}
                <span className="increase-button" onClick={()=> dispatch(addItem(item))}> &gt;</span>
            </span>
            <span className="price">${price*quantity}</span>            
            <span className="remove-button" onClick = {()=> dispatch(removeItem(item))}>&#10005;</span>
        </div>
    );
}

export default connect(null)(CheckoutItem);