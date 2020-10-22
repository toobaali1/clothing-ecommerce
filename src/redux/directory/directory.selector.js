import {createSelector} from "reselect";

const selectDirectory = (state) => {
    return state.directory;
}

export const selectDirectorySections = createSelector([selectDirectory],(directory)=>{
    return directory.sections;
});