import { createSlice } from "@reduxjs/toolkit";
import { addProduct, addReview, allProduct, selectProduct } from "./productController";

const initialState = {
    product:[],
    selectedProduct:{},
    status:'ideal',
    messege:"",
    error:null
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{

        builder.addCase(addProduct.pending , (state , action)=>{
            state.status="panding"
            state.messege=""
        })
        builder.addCase(addProduct.fulfilled , (state , action)=>{
            state.product.push(action.payload.product)
            state.status="success"
            state.messege=""
        })
        builder.addCase(addProduct.rejected , (state , action)=>{
            state.status="rejected"
            state.messege=action.error.message
        })

        builder.addCase( allProduct.pending , (state , action)=>{
            state.status="pending"
        } )
        builder.addCase(allProduct.fulfilled , (state , action)=>{
            state.product = action.payload.product
            state.status = "success"
            
        })
        builder.addCase(allProduct.rejected, (state , action)=>{
            state.status = "rejected"
            state.messege = action.error.message
            state.error = action.error.message
        })

        builder.addCase( selectProduct.pending , (state , action)=>{
            state.selectedProduct = {}
            state.status="pending"
        } )
        builder.addCase(selectProduct.fulfilled , (state , action)=>{
            state.selectedProduct = action.payload.product
            state.status = "success"
            
        })
        builder.addCase(selectProduct.rejected, (state , action)=>{
            state.status = "rejected"
            state.messege = action.error.message
            state.error = action.error.message
            state.selectedProduct = {}
        })

        builder.addCase(addReview.pending , (state , action)=>{
            state.status="panding"
            state.messege=""
        })
        builder.addCase(addReview.fulfilled , (state , action)=>{
            state.product.push(action.payload.product)
            state.status="success"
            state.messege=""
        })
        builder.addCase(addReview.rejected , (state , action)=>{
            state.status="rejected"
            state.messege=action.error.message
        })

        }
    
})

export default productSlice.reducer