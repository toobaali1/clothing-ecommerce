import React from "react";
import "./checkout-item.styles.scss";

import {connect} from "react-redux";
import {addItem, decreaseItem,removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({item,addItem,decreaseItem,removeItem}) => {
    const {imageUrl,name,quantity,price} = item;

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow-button" onClick={()=> decreaseItem(item)}>&#10094; </span>
                {quantity}
                <span className="arrow-button" onClick={()=> addItem(item)}> &#10095;</span>
            </span>
            <span className="price">${price*quantity}</span>            
            <span className="remove-button" onClick = {()=> removeItem(item)}>&#10005;</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch)=>({
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);