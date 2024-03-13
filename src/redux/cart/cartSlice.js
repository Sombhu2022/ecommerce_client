import { createSlice } from "@reduxjs/toolkit";
import {  addCard } from "./cartController";


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
        .addCase( addCard.pending ,(state , action)=>{
            state.status ="panding";
        })
        .addCase(addCard.fulfilled , (state , action )=>{
            state.product.push(action.payload) 
            console.log(action.payload.data);
            state.status = "add product"
            state.error = false
        })
        .addCase(addCard.rejected , (state , action )=>{
            
            state.status = "product not add"
            state.error = true
        })
        
        //allproduct
        // .addCase(allProduct.pending , (state , action)=>{

        // })
    }
})

export default cartSlice.reducer