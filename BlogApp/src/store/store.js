import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./authSlice"

const store = configureStore({
    // reducer: {
    //     auth: authReducer
    // }
    reducer: authReducer
})

export default store;