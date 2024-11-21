import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../components/Products/Types";
import { addToCartAsync, removeFromCartAsync } from "./cartAsyncActions"; 



const initialState: CartState = {
    cart: [],
    loading: false,
    error: null
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: { //THESE ARE ALL SYNC REDUCER ACTIONS
        // addToCart: (state, action) => {
        //     state.cart = [...state.cart, action.payload]; 
        // },
        // removeFromCart: (state, action) => {
        //     state.cart = state.cart.filter((product) => product.id !== action.payload);
        // }
    },
    extraReducers: (builder) => {
        // Handle the 'pending' state (when async operation is in progress)
        builder
            .addCase(addToCartAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeFromCartAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Handle the 'fulfilled' state (when async operation is successful)
            .addCase(addToCartAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = [...state.cart, action.payload]; // Add the item to the cart
            })
            .addCase(removeFromCartAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = state.cart.filter((product) => product.id !== action.payload); // Remove the item from the cart
            })
            // Handle the 'rejected' state (when async operation fails)
            .addCase(addToCartAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || "Failed to add item to cart";
            })
            .addCase(removeFromCartAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || "Failed to remove item from cart";
            });
    }
});

export default cartSlice.reducer;
