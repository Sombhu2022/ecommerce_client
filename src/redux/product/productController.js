import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosSetup";
import { baseUrl } from "../../App";


export const addProduct = createAsyncThunk("product/addProduct", async (myForm) => {
    console.log(myForm);
    const { data }= await API.post(`${baseUrl}/product`, myForm, {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    },
    )
    console.log(data);
    return data
})


export const allProduct = createAsyncThunk("product/allProduct", async () => {

    const {data } = await API.get(`${baseUrl}/product`, {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    },
    )
    return data
})


export const selectProduct = createAsyncThunk("product/selectProduct", async (id) => {

    const {data }= await API.get(`${baseUrl}/product/${id}`, {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    },
    )
    return data
})

export const addReview =createAsyncThunk("product/addReview"  , async({id ,reting , feedback })=>{
    console.log(reting , feedback);
    const {data }= await API.post(`${baseUrl}/product/review/${id}`,{reting , feedback }, {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    },
    )
    // console.log("error");
    console.log(data);
    return data
})

export const updateProduct = createAsyncThunk('product/updateProduct' , async({id , stock , price , discount})=>{
    console.table({id , stock,price ,discount});
    const { data } = await API.patch(`${baseUrl}/product/${id}` , { stock , price , discount} , 
    {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    },
    )
    
    console.log(data);
 return data
})

export const deleteProduct = createAsyncThunk('product/deleteProduct' , async({id })=>{

    const { data } = await API.delete(`${baseUrl}/product/${id}` , 
    {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    },
    )

    console.log(data);
 return data
})


export const filterProductByCategory = createAsyncThunk('product/filterProductByCategory' , async(category)=>{

    const {data} = await API.get(`${baseUrl}/product/category/${category}`,{
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    },)
    console.log('product categogy' , data);
    return data
} )

export const searchProductByName = createAsyncThunk('/product/searchProductByName', async({name})=>{
     const {data} = await API.get(`${baseUrl}/product/name/${name}`,{
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    },)
    console.log(data);
    return data
    
})