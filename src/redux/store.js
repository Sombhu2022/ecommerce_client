import { configureStore } from "@reduxjs/toolkit"
import  cartSlice  from "../redux/cart/cartSlice.js"
import userSlice from "./user/userSlice.js"
import productSlice from "./product/productSlice.js"
import  orderSlice  from "./order/orderSlice.js"




export const store = configureStore(
    {
        reducer:{
            cart:cartSlice,
            user:userSlice,
            product: productSlice,
            order:orderSlice
        }
    }
)
