import {cartActionTypes} from "./cart.types";

export const toggleDropdownStatus = () => ({
    type: cartActionTypes.TOGGLE_DROPDOWN_STATUS
});

export const addItem = (item) =>( {
    type: cartActionTypes.ADD_ITEM,
    payload: item
});