import { createSlice } from "@reduxjs/toolkit";
import {  addProduct } from "./cartController";


const initialState ={
    product:[],
    user:{},
    isAuthentication: false ,
    status:false,
    error:null

}

export const cartSlice = createSlice({
    name:"cart",
    initialState ,
    reducers:{
        
    },
    extraReducers:(builder)=>{

        builder
        .addCase( addProduct.pending ,(state , action)=>{
            state.status ="panding";
        })
        .addCase(addProduct.fulfilled , (state , action )=>{
            state.product.push(action.payload) 
            console.log(action.payload.data);
            state.status = "add product"
            state.error = false
        })
        .addCase(addProduct.rejected , (state , action )=>{
            
            state.status = "product not add"
            state.error = true
        })
        
        //allproduct
        // .addCase(allProduct.pending , (state , action)=>{

        // })
    }
})

export default cartSlice.reducer