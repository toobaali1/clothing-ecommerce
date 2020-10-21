import {cartActionTypes} from "./cart.types";

export const toggleDropdownStatus = () => ({
    type: cartActionTypes.TOGGLE_DROPDOWN_STATUS
});

export const addItem = (item) =>( {
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const decreaseItem = (item)=> ({
    type: cartActionTypes.DECREASE_ITEM,
    payload: item
});

export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
});