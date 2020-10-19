import React from "react";
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {toggleDropdownStatus} from "../../redux/dropdown/dropdown.actions";
import {connect} from "react-redux";

const cartIcon = ({currentStatus,toggleDropdownStatus}) => {
    return(
        <div className="cart-icon" onClick={()=>{toggleDropdownStatus(!currentStatus); }}>
            <ShoppingIcon className="shopping-icon" />
            <div className="item-count">0</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    toggleDropdownStatus: (status)=>{dispatch(toggleDropdownStatus(status))} 
});

const mapStateToProps = ({dropdown}) => ({
    currentStatus: dropdown.currentStatus
});

export default connect(mapStateToProps,mapDispatchToProps)(cartIcon);