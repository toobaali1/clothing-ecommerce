import {cartActionTypes} from "./cart.types";
import {addItemToCart} from "./cart.utils";

const INITIAL_STATE = {
    currentDropdownStatus: false,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case cartActionTypes.TOGGLE_DROPDOWN_STATUS:
            return ({
                ...state,
                currentDropdownStatus: !state.currentDropdownStatus
            });

        case cartActionTypes.ADD_ITEM:
            return({
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            });

        default:
            return state;
    }
}

export default cartReducer;