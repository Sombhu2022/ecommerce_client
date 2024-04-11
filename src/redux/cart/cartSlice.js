import { createSlice } from "@reduxjs/toolkit";
import {  addCard, getCart, updateProductQantity } from "./cartController";


const initialState ={
    product:{},
    status:false,
    error:null,
    message:null

}

export const cartSlice = createSlice({
    name:"cart",
    initialState ,
    reducers:{
        
    },
    extraReducers:(builder)=>{

        builder
        .addCase( addCard.pending ,(state , action)=>{
            state.status ="panding";
            state.message = null

        })
        .addCase(addCard.fulfilled , (state , action )=>{
            state.product = action.payload.product
            state.status = "success"
            state.error = false
            state.message = action.payload.quantityFull
        })
        .addCase(addCard.rejected , (state , action )=>{
            
            state.status = "rejected"
            state.error = true
        })
        
        .addCase( getCart.pending ,(state , action)=>{
            state.status ="panding";
            state.message = null

        })
        .addCase(getCart.fulfilled , (state , action )=>{
            state.product = action.payload.product
            state.status = "success"
            state.error = false
            state.message = action.payload.quantityFull

        })
        .addCase(getCart.rejected , (state , action )=>{
            
            state.status = "rejected"
            state.error = true
        })
        .addCase( updateProductQantity.pending ,(state , action)=>{
            state.status ="panding";
            state.message = null

        })
        .addCase(updateProductQantity.fulfilled , (state , action )=>{
            state.product = action.payload.product
            state.status = "success"
            state.error = false
            state.message = action.payload.quantityFull

        })
        .addCase(updateProductQantity.rejected , (state , action )=>{
            
            state.status = "rejected"
            state.error = true
        })
        
        //allproduct
        // .addCase(allProduct.pending , (state , action)=>{

        // })
    }
})

export default cartSlice.reducer