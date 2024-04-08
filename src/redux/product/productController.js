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