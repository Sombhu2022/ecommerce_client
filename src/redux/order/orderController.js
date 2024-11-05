import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosSetup";
import { baseUrl } from "../../App";



export const getAllOrdersOfUser =createAsyncThunk('order/getAllOrdersOfUser' , async()=>{
    const { data } = await API.get(`${baseUrl}/order/all` ,  {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    })
    
    return data 
} )

export const getAllOrders =createAsyncThunk('order/getAllOrders' , async()=>{
    console.log('order/getAllOrder run');
    
    const { data } = await API.get(`${baseUrl}/order` ,  {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    })
    console.log(data);
    
    return data 
} )


export const getOrderDetails  =createAsyncThunk('order/getOrderDetails' , async({orderId})=>{
   
    
    const { data } = await API.get(`${baseUrl}/order/orderDetails/${orderId}` ,  {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    }) 
    return data 
} )


export const updateDeliveryStatus =  createAsyncThunk('order/updateDeliveryStatus' , async({orderId , deliveryStatus})=>{
    
    const { data } = await API.post(`${baseUrl}/order/deliveryStatus/${orderId}` ,{deliveryStatus} ,  {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    })
    return data 

})

