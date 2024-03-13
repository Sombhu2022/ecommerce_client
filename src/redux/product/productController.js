import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk("product/addProduct", async (myForm) => {

    const data = await axios.post("http://localhost:8080/product/", myForm, {
        headers: { "Content-Type": "multipart/form-data", },
        withCredentials: true
    },
    )
    console.log(data);
    return data.data
})