import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders, getAllOrdersOfUser, getOrderDetails, updateDeliveryStatus } from "./orderController";

const initialState = {
    orders:[],
    selectOrder:{},
    status:{
        getOrder:'',
        updateDelivery:"",
        getOrderOfUser:"",
        orderDetails:""
    
    },
    message:"",
    error:null
}

export const orderSlice = createSlice({
    name:"order" ,
    initialState ,
    reducers:{

    },
    extraReducers:(builder)=>{

        builder.addCase(getAllOrders.pending , (state , action)=>{
            state.status.getOrder = 'pending'
        })
        builder.addCase(getAllOrders.fulfilled , (state , action)=>{
            state.status.getOrder = 'success'
            state.orders = action.payload.data
            state.message = 'all orders fetched !'
        })
        builder.addCase(getAllOrders.rejected , (state , action)=>{
            state.status.getOrder = 'rejected'
            state.error = action.error
        })


        builder.addCase(updateDeliveryStatus.pending , (state , action)=>{
            state.status.updateDelivery = 'pending'
        })
        builder.addCase(updateDeliveryStatus.fulfilled , (state , action)=>{
            state.status.updateDelivery = 'success'
            state.message = 'all orders fetched !'
        })
        builder.addCase(updateDeliveryStatus.rejected , (state , action)=>{
            state.status.updateDelivery = 'rejected'
            state.error = action.error
        })



        builder.addCase(getAllOrdersOfUser.pending , (state , action)=>{
            state.status.getOrderOfUser = 'pending'
        })
        builder.addCase(getAllOrdersOfUser.fulfilled , (state , action)=>{
            state.status.getOrderOfUser = 'success'
            state.message = 'all orders fetched !'
            state.orders = action.payload.data
        })
        builder.addCase(getAllOrdersOfUser.rejected , (state , action)=>{
            state.status.getOrderOfUser = 'rejected'
            state.error = action.error
        })


        builder.addCase(getOrderDetails.pending , (state , action)=>{
            state.status.orderDetails = 'pending'
        })
        builder.addCase(getOrderDetails.fulfilled , (state , action)=>{
            state.status.orderDetails = 'success'
            state.message = 'all orders fetched !'
            state.selectOrder = action.payload.data
        })
        builder.addCase(getOrderDetails.rejected , (state , action)=>{
            state.status.orderDetails = 'rejected'
            state.error = action.error
        })
    }
})



export default orderSlice.reducer