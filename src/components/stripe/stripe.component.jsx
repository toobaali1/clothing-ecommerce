import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {

    const publishableKey = `${process.env.REACT_APP_STRIPE_API}`;
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