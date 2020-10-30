import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {

    const publishableKey = "pk_test_51HhY7hC6eDZECirhL9tHyet3x3WobwKfjm88itSQF4Ltcczz6d1C4IYbhpYtdnb2G1DoLK4LheGNCU4ZUxoLJb2N001xnFapxu"
    const priceForStripe = price * 100;
    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return(
        <StripeCheckout 
            onToken = {onToken}
            stripeKey = {publishableKey}
            image = "http://svgshare.com/i/CUz.svg"
            name = "Clothing Store"
            price= {price}
            amount = {priceForStripe}
            billingAddress
            shippingAddress
            label= "Pay Now"
            panelLabel = "PAY NOW"
            description = {`Your total is $${price}`}
        />
    )
}


export default StripeCheckoutButton;