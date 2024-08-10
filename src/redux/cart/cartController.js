import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosSetup";
import { baseUrl } from "../../App";



export const addCard = createAsyncThunk( "cart/addCard" , async({ productId , price })=>{
    console.log({ productId , price});
    const {data} = await API.post(`${baseUrl}/card`, { productId , price} ,  {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    })
    console.log(data)
    return data
})
export const getCart = createAsyncThunk( "cart/getCart" , async()=>{
    
    const {data} = await API.get(`${baseUrl}/card` ,  {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    })
    console.log(data)
    return data
})

export const updateProductQantity = createAsyncThunk( "cart/updateProductQantity" ,async({ cartId , type , price })=>{
    console.log(cartId , type , price);

    const data = await API.post(`${baseUrl}/card/update-quantity` , { cartId , type , price} , {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    })
    console.log(data)
    return data.data
})


// export const deleteProduct = createAsyncThunk("card/allCard" , async(data)=>{

//     return data
// })
// export const allProduct = createAsyncThunk("card/allCard" , async(data)=>{

//     return data
// })