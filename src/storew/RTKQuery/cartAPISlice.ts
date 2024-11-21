import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CART_BASE_URL } from "../../constants/AppConstants";
import { ProductCart } from "../../components/Products/Types";

export interface CartItem {
    id: string,
    product : {
    name: string,
    imageUrl: string,
    price: number,
    id: string,
    quantity: number,
    totalPrice: number
    }
}

export const cartAPI = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl : CART_BASE_URL}),
    tagTypes: ['Cart'],
    endpoints: (builder) => ({
        getCart: builder.query<CartItem[], void>({
            query: () => '/cart',
            providesTags: ['Cart']
        }),

        addToCart: builder.mutation<void, ProductCart>({
            query: (product) => ({
                url: '/cart',
                method: 'POST',
                body: { product }
            }),
            invalidatesTags: ['Cart']
        }),

        removeFromCart: builder.mutation<void, string>({
            query: (id) => ({
                url: `/cart/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Cart']
        }),
    })
})

export const { useGetCartQuery, useAddToCartMutation, useRemoveFromCartMutation } = cartAPI;