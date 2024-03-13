import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("user/createUser" , async(data)=>{
    
        const user = await axios.post("http://localhost:8080/user/register" , data ,{
            headers:{
                "Content-Type":"multipart/form-data"
            },
            withCredentials:true
        })
         console.log(user);
         
        return user.data;
} )

export const logInUser = createAsyncThunk("user/loginUser" , async({email , password})=>{
    const user = await axios.post("http://localhost:8080/user/login" , {email , password},{
				headers:{
					"Content-Type":"application/json"
				},
				withCredentials:true
			})
    return user.data        
})