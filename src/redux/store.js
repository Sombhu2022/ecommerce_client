import { configureStore } from "@reduxjs/toolkit"
import  cartSlice  from "../redux/cart/cartSlice.js"
import userSlice from "./user/userSlice.js"
import productSlice from "./product/productSlice.js"


export const store = configureStore(
    {
        reducer:{
            card:cartSlice,
            user:userSlice,
            product: productSlice
        }
    }
)
