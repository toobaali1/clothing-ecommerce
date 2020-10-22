import {createSelector} from "reselect";

const selectShop = (state) => {
    return state.shop;
}

export const selectShopCollections = createSelector([selectShop], (shop)=>{
    return shop.collections;
});