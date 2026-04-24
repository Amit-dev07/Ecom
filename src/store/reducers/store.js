import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer: {
        // Add your reducers here
    },
    preloadState: {
        // Add your initial state here
    },
});


export default store;