import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/ProductReducers";
import { ErrorReducer } from "./reducers/ErrorReducer";
import { cartReducer } from "./reducers/CartReducer";

const cartItems = localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems")) 
    : [];

const initialState = {
    carts: {
        cart: cartItems,
    },
};

const store = configureStore({
    reducer: {
        // Add your reducers here
        products : productReducer,
        errors : ErrorReducer,
        carts : cartReducer
    },
    preloadedState: initialState,
});
 

export default store;