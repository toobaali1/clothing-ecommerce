import {createSelector} from "reselect";

const selectCart = (state) =>{
    return state.cart;
}

export const selectCartItems = createSelector([selectCart], (cart)=>{
    return cart.cartItems;
});

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems)=>{
    return cartItems.reduce((acc,cartItem)=>{
        return( acc + cartItem.quantity);
    },0);
});

export const selectCartTotalPrice = createSelector([selectCartItems], (cartItems)=>{
    return cartItems.reduce((acc,cartItem)=>{
        return acc + (cartItem.price * cartItem.quantity);
    }, 0);
});

export const selectCartCurrentDropdownStatus = createSelector([selectCart],(cart)=>{
    return cart.currentDropdownStatus;
});

