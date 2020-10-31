import React from "react";
import {HeaderContainer,LogoContainer,OptionsContainer, OptionLink} from "./header.styles";

// COMPONENTS
import {ReactComponent as ReactLogo} from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";


// SELECTORS/RESELECT
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartCurrentDropdownStatus} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

import {connect} from "react-redux";
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser, currentDropdownStatus}) =>{
    return(
        <HeaderContainer>

            <LogoContainer to="/">
                <ReactLogo />
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {currentUser ?
                <OptionLink as='div' onClick={()=>auth.signOut()} >SIGN OUT</OptionLink> :
                <OptionLink to="/signin">SIGN IN</OptionLink>}
                <CartIcon />
            </OptionsContainer>

           {currentDropdownStatus && <CartDropdown />}
           
        </HeaderContainer>
    )
}



const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentDropdownStatus: selectCartCurrentDropdownStatus
});

export default connect(mapStateToProps)(Header);