import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "./productController";

const initialState = {
    product:{},
    status:'ideal',
    messege:""
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{

        builder.addCase(addProduct.pending , (state , action)=>{
            state.product = {}
            state.status="panding"
            state.messege=""
        })
        builder.addCase(addProduct.fulfilled , (state , action)=>{
            state.product = action.payload.product
            state.status="success"
            state.messege=""
        })
        builder.addCase(addProduct.rejected , (state , action)=>{
            state.product = {}
            state.status="rejected"
            state.messege=action.error.message
        })

        }
    
})

export default productSlice.reducer