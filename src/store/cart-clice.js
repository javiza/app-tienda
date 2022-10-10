import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList:[],
        totalQuantity: 0,
        showCart: true,                                                                                                                                          
    },
    reducers: {
        addToCart(state,action) {
            const newItem = action.payload;
            // to check if item is already available
            const existingItem = state.itemsList.find((item) => item.id === newItem.id);
            
            if(existingItem){
                existingItem.quantity ++;//suma 
                existingItem.totalPrice += newItem.price;
            
            }else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
            }
        },
        removeFromaCart() {

        },
        setShowCart(state) {

            state.showCart = true;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;