import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/ProductReducers";
import { ErrorReducer } from "./reducers/ErrorReducer";
import { cartReducer } from "./reducers/CartReducer";
import { authReducer } from "./reducers/authReducer";

const user = localStorage.getItem("auth") 
    ? JSON.parse(localStorage.getItem("auth"))
    : null;

const cartItems = localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems")) 
    : [];

const initialState = {
    auth : {user : user},
    carts: {
        cart: cartItems,
    },
};

const store = configureStore({
    reducer: {
        // Add your reducers here
        products : productReducer,
        errors : ErrorReducer,
        carts : cartReducer,
        auth : authReducer
    },
    preloadedState: initialState,
});
 

export default store;