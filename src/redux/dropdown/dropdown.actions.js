import {dropdownActionTypes} from "./dropdown.types";

export const toggleDropdownStatus = (currentStatus) => ({
    type: dropdownActionTypes.TOGGLE_DROPDOWN_STATUS,
    payload: currentStatus
})