import { configureStore } from "@reduxjs/toolkit";
import { cartAPI } from "./cartAPISlice";
import { productsAPI } from "./productsAPISlice";

export const store = configureStore({
    reducer: {
        [cartAPI.reducerPath]: cartAPI.reducer,
        [productsAPI.reducerPath]: productsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(cartAPI.middleware)
        .concat(productsAPI.middleware)
});