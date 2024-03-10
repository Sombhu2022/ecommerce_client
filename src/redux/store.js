import { configureStore } from "@reduxjs/toolkit"
import  cartSlice  from "../redux/cart/cartSlice.js"

console.log("store")
export const store = configureStore(
    {
        reducer:cartSlice
    }
)
console.log("store")