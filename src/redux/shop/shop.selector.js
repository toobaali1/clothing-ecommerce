import {createSelector} from "reselect";

const selectShop = (state) => {
    return state.shop;
}

export const selectShopCollections = createSelector([selectShop], (shop)=>{
    return shop.collections;
});

export const selectShopCollectionsForPreview = createSelector([selectShopCollections], (shopCollections)=>{
    return Object.keys(shopCollections).map((collectionKey) => shopCollections[collectionKey])
}); //to return an array for collection-overview

export const selectCollection = (collectionUrlParameter) => {
    return createSelector([selectShopCollections], (shopCollection)=>{
         return shopCollection[collectionUrlParameter]
        });
}