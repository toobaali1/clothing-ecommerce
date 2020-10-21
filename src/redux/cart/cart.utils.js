export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItems = cartItems.find((item)=>{ 
        return item.id === cartItemToAdd.id
    });

    if(existingCartItems){
        return cartItems.map((item) => 
            (item.id === cartItemToAdd.id) ? {...item, quantity: item.quantity + 1} : item );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}] //return this if cartItemToAdd does not exist already 
}

export const removeItem = (cartItems, cartItemToRemove)=>{
    return cartItems.filter((item)=>
        (item.id !== cartItemToRemove.id) && item );
}

export const decreaseItemFromCart  = (cartItems,cartItemToDecrease) => {
    const existingCartItems = cartItems.find((item)=>{ 
        return item.id === cartItemToDecrease.id
    });

    
        if(existingCartItems.quantity > 1){
            return cartItems.map((item) => 
                (item.id === cartItemToDecrease.id) ? {...item, quantity: item.quantity - 1} : item );
        } else {
            return removeItem(cartItems,cartItemToDecrease); //or use filter here
    }
}

