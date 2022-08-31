import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {productsAPI} from './api/products'

const rootReducer = combineReducers({
    [productsAPI.reducerPath]: productsAPI.reducer
})

const setupStore = () => (
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => (
            getDefaultMiddleware()
            .concat(productsAPI.middleware)
        )
    })
)

export const store = setupStore()