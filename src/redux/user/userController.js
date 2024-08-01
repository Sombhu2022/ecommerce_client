import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../App";
import API from "../../utils/axiosSetup";

export const createUser = createAsyncThunk("user/createUser" , async(data)=>{
    
        const user = await API.post(`${baseUrl}/user/register` , data ,{
            headers:{
                "Content-Type":"multipart/form-data"
            },
            withCredentials:true
        })
         console.log(user);
         
        return user.data;
} )

export const logInUser = createAsyncThunk("user/logInUser" , async(data)=>{

  try {
    
    const user = await API.post(`${baseUrl}/user/login` , data ,{
				headers:{
					"Content-Type":"application/json"
				},
				withCredentials:true
			})
      console.log(user);
      return user.data        
  } catch (error) {
     console.log(error);
  }
})


export const authUser = createAsyncThunk("user/authUser" , async()=>{
    const { data } = await API.get(`${baseUrl}/user/`, {
        headers: { Content_type: "application/json" },
        withCredentials: true,
      });
      console.log(data);
    return data        
})


export const logoutUser = createAsyncThunk("user/logoutUser" , async()=>{
    const { data } = await API.get(`${baseUrl}/user/logout`, {
        headers: {
          Content_type: "application/json",
        },
        withCredentials: true,
      });
    return data        
})

export const changePassword = createAsyncThunk("user/changePassword" , async({oldPassword , newPassword})=>{
  try {
    const { data } = await API.post(`${baseUrl}/user/changePassword` , { oldPassword , newPassword},
     {
       headers:{
         "Content-Type":"application/json"
       }
     }
    )
    return data
  } catch (error) {
   console.log(error);
  }     
})


export const sendOtpForForgetPassword = createAsyncThunk("user/sendOtpForForgetPassword" , async(email)=>{
  try {
    const { data } =await API.post(`${baseUrl}/user/sendOtp` , {email}, {
      headers: {
        Content_type: "application/json",
      }})

    return data
  } catch (error) {
    console.log(error);
    
  }    
})


export const ForgetPasswordWithOtp = createAsyncThunk("user/ForgetPasswordWithOtp" , async({otp , password})=>{
  try {
    const {data} = await API.post(`${baseUrl}/user/forgotPass` , 
      { otp , password } , 
      { headers:{
        Content_type: "application/json",
      }}
    )
    return data
  } catch (error) {
    console.log(error);
  }        
})

