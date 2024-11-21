// import { ProductCart } from "../components/Products/Types";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductCart } from "../components/Products/Types";
import axios from "axios";

// export const ADD_TO_CART = 'ADD_TO_CART';
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// interface AddToCartAction {
//   type: typeof ADD_TO_CART;
//   payload: ProductCart;
// }

// interface RemoveFromCartAction {
//   type: typeof REMOVE_FROM_CART;
//   payload: string; 
// }

// export type CartActionTypes = AddToCartAction | RemoveFromCartAction;

// export const addToCart = (product: ProductCart): AddToCartAction => ({
//   type: ADD_TO_CART,
//   payload: product,
// });

// export const removeFromCart = (productId: string): RemoveFromCartAction => ({
//   type: REMOVE_FROM_CART,
//   payload: productId,
// });


////////////////////////////////////////

export const addToCartAsync = createAsyncThunk(
    "cart/addToCartAsync",
    async (product: ProductCart) => {
        const response = await axios.post('http://localhost:5000/cart', {
            product
        });
        return response.data; 
    }
);
export const removeFromCartAsync = createAsyncThunk(
    "cart/removeFromCartAsync",
    async (id: string) => {
        await axios.delete(`http://localhost:5000/cart/${id}`)
        return id;
    }
);
