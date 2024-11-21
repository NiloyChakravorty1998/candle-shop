import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PRODUCTS_BASE_URL } from "../../constants/AppConstants";
import { Product } from "../../components/Products/Types";

export const productsAPI = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl : PRODUCTS_BASE_URL}),
    tagTypes: ['Products', 'Product'],
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], void>({
            query: () => '/products',
            providesTags: ['Products']
        }),

        getProductById: builder.query<Product, string>({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),

        addProduct: builder.mutation<void, Product>({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Products']
        }),

        updateProduct: builder.mutation<void, { id: string | undefined; product: Partial<Product> }>({
            query: ({ id, product }) => ({
                url: `/products/${id}`,
                method: 'PATCH',
                body: product
            }),
            invalidatesTags: ['Products']
        }),

        deleteProduct: builder.mutation<void, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Products']
        }),
    })
})

export const { useGetAllProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation, useGetProductByIdQuery } = productsAPI;