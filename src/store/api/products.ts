import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {IProduct, IProductRootObject} from '../../models/api/product'

export const productsAPI = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
  endpoints: (build) => ({
    fetchProducts: build.query<IProduct[], void>({
       query: () => ({
        url: 'products'
       }),
       transformResponse: (response: IProductRootObject) => response.products
    })
  })
})

export const {useFetchProductsQuery} = productsAPI