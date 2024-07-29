import { createSlice } from "@reduxjs/toolkit";
import { addProduct, addReview, allProduct, deleteProduct, selectProduct, updateProduct } from "./productController";

const initialState = {
    product:[],
    selectedProduct:{},
    status:{
        addProduct:"",
        updateProduct:"",
        deleteProduct:"",
        reviewProduct:"",
        allProduct:"",
        selectProduct:""
    },

    messege:"",
    error:null
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        productStatusclean(state , action){
            state.status.allProduct = ''
            state.status.addProduct = ''
            state.status.deleteProduct = ''
            state.status.reviewProduct = ''

        }
    },
    extraReducers:(builder)=>{

        builder.addCase(addProduct.pending , (state , action)=>{
            state.status.addProduct="panding"
            state.messege=""
        })
        builder.addCase(addProduct.fulfilled , (state , action)=>{
            state.product.push(action.payload.product)
            state.status.addProduct="success"
            state.messege=""
        })
        builder.addCase(addProduct.rejected , (state , action)=>{
            state.status.addProduct="rejected"
            state.messege=action.error.message
        })

        builder.addCase( allProduct.pending , (state , action)=>{
            state.status.allProduct="pending"
        } )
        builder.addCase(allProduct.fulfilled , (state , action)=>{
            state.product = action.payload.product
            state.status.allProduct = "success"
            
        })
        builder.addCase(allProduct.rejected, (state , action)=>{
            state.status.allProduct = "rejected"
            state.messege = action.error.message
            state.error = action.error.message
        })

        builder.addCase( selectProduct.pending , (state , action)=>{
            state.selectedProduct = {}
            state.status.selectProduct ="pending"
        } )
        builder.addCase(selectProduct.fulfilled , (state , action)=>{
            state.selectedProduct = action.payload.product
            state.status.selectProduct = "success"
            
        })
        builder.addCase(selectProduct.rejected, (state , action)=>{
            state.status.selectProduct = "rejected"
            state.messege = action.error.message
            state.error = action.error.message
            state.selectedProduct = {}
        })

        builder.addCase(addReview.pending , (state , action)=>{
            state.status.reviewProduct ="panding"
            state.messege=""
        })
        builder.addCase(addReview.fulfilled , (state , action)=>{
            state.product.push(action.payload.product)
            state.status.reviewProduct ="success"
            state.messege=""
        })
        builder.addCase(addReview.rejected , (state , action)=>{
            state.status.reviewProduct ="rejected"
            state.messege=action.error.message
        })
        builder.addCase(updateProduct.pending , (state , action)=>{
            state.status.updateProduct ="panding"
            state.messege=""
        })
        builder.addCase(updateProduct.fulfilled , (state , action)=>{
            state.product = action.payload.product
            state.status.updateProduct ="success"
            state.messege=""
        })
        builder.addCase(updateProduct.rejected , (state , action)=>{
            state.status.updateProduct ="rejected"
            state.messege=action.error.message
        })
        builder.addCase(deleteProduct.pending , (state , action)=>{
            state.status.deleteProduct ="panding"
            state.messege=""
        })
        builder.addCase(deleteProduct.fulfilled , (state , action)=>{
            state.product = action.payload.product
            state.status.deleteProduct ="success"
            state.messege=""
        })
        builder.addCase(deleteProduct.rejected , (state , action)=>{
            state.status.deleteProduct ="rejected"
            state.messege=action.error.message
        })

        }
    
})

export const { productStatusclean } = productSlice.actions;

export default productSlice.reducer