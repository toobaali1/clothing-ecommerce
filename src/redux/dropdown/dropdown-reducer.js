import {dropdownActionTypes} from "./dropdown.types";

const INITIAL_STATE = {
    currentStatus: false
}

const dropdownReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case dropdownActionTypes.TOGGLE_DROPDOWN_STATUS:
            return ({
                ...state,
                currentStatus: action.payload
            });
        default:
            return state;
    }
}

export default dropdownReducer;