import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosSetup";
import { baseUrl } from "../../App";



export const addCard = createAsyncThunk( "cart/addCard" , async({  productQuantity , product})=>{
    console.log({productQuantity , product});
    const {data} = await API.post(`${baseUrl}/card`, {productQuantity , product} ,  {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    })
    console.log(data)
    return data
})


// export const deleteProduct = createAsyncThunk("card/allCard" , async(data)=>{

//     return data
// })
// export const allProduct = createAsyncThunk("card/allCard" , async(data)=>{

//     return data
// })