import {createReducer} from '@reduxjs/toolkit' ;

const initialState = {
    cart: localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')): []
} ;

const cartReducer = createReducer({
    initialState,
    addToCart : (state,action) => {
        const items = action.payload
        const isItemsExist = state.cart.filter(i => i.items === items)
        if(isItemsExist){
            
        }
    }
})