import { createAsyncThunk } from "@reduxjs/toolkit";



export const addCard = createAsyncThunk( "cart/allCard" , async(data)=>{

    console.log(data)
    return data
})


// export const deleteProduct = createAsyncThunk("card/allCard" , async(data)=>{

//     return data
// })
// export const allProduct = createAsyncThunk("card/allCard" , async(data)=>{

//     return data
// })