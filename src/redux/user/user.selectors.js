import {createSelector} from "reselect";

const selectUser = (state) => {
    return state.user;
}

export const selectCurrentUser = createSelector([selectUser],(user)=>{
    return user.currentUser;
});