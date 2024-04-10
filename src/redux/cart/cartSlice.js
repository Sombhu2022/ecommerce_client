import { createSlice } from "@reduxjs/toolkit";
import {  addCard } from "./cartController";


const initialState ={
    product:[],
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
        .addCase( addCard.pending ,(state , action)=>{
            state.status ="panding";
        })
        .addCase(addCard.fulfilled , (state , action )=>{
            state.product = action.payload.product
            state.status = "success"
            state.error = false
        })
        .addCase(addCard.rejected , (state , action )=>{
            
            state.status = "rejected"
            state.error = true
        })
        
        //allproduct
        // .addCase(allProduct.pending , (state , action)=>{

        // })
    }
})

export default cartSlice.reducer