import React from "react";
import {CustomButtonContainer} from "./custom-button.styles";

const CustomButton = ({children,isGoogleSignIn,inverted, ...otherProps}) => {
    return (
        <CustomButtonContainer
        isGoogleSignIn = {isGoogleSignIn}
        inverted = {inverted}
        {...otherProps}>
            {children}
        </CustomButtonContainer>
    );
}

export default CustomButton;