import {combineReducers} from "redux";
import userReducer from "./user/user-reducer";
import dropdownReducer from "./dropdown/dropdown-reducer";

export default combineReducers({
    user: userReducer,
    dropdown: dropdownReducer
});