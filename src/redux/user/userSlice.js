import { createSlice } from "@reduxjs/toolkit";
import { authUser, changePassword, createUser, ForgetPasswordWithOtp, logInUser, logoutUser, sendOtpForForgetPassword } from "./userController";

const initialState = {
    user:{},
    isAuthenticate:false,
    status:{
        regUser:'',
        loginUser:'',
        authenticateUser:'',
        logoutUser:'',
        changePassword:'',
        sendOtp:'',
        forgetPassword:''
    },
    error:null,
    message:null,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        resateUserStatus(state , action ){
               state.status.regUser=''
               state.status.loginUser=''
               state.status.authenticateUser=''
               state.status.logoutUser=''
               state.status.changePassword=''
               state.status.sendOtp=''
               state.status.forgetPassword=''
            }
    },

    extraReducers:(builder)=>{
        builder.addCase( createUser.pending , (state , action)=>{
            state.status.regUser ="pending";
            state.error =null
            state.isAuthenticate=false
            state.user = {}
            state.message = null
        })

        builder.addCase(createUser.fulfilled ,(state , action)=>{
            //  state.error = action.payload
            state.status.regUser ="success";
            state.message = action.payload.message 
            state.isAuthenticate = true;
            state.user = action.payload.user
            localStorage.setItem("token" , action.payload.token)
        } )


        builder.addCase(createUser.rejected , (state , action)=>{
            state.error=action.error.message
            state.status.regUser="rejected"
            state.isAuthenticate=false
            state.message = action.error.message
        })

        builder.addCase(logInUser.pending , (state , action)=>{
            state.status.loginUser="pending"
            state.error =null
            state.isAuthenticate=false
            state.user = {}
            state.message = null
        })
       
        builder.addCase(logInUser.fulfilled ,(state , action)=>{
            //  state.error = action.payload
            state.status.loginUser ="success";
            // state.message = action.payload.message
            state.isAuthenticate = true;
            state.user = action.payload.user
            localStorage.setItem("token" , action.payload.token)
        } )


        builder.addCase(logInUser.rejected , (state , action)=>{
            state.error=action.error.message
            state.status.loginUser ="rejected"
            state.isAuthenticate=false
            state.message = action.error.message
        })



        builder.addCase(authUser.pending , (state , action)=>{
            state.status.authenticateUser="pending"
            state.error =null
            state.isAuthenticate=false
            state.user = {}
            state.message = null
        })
       
        builder.addCase(authUser.fulfilled ,(state , action)=>{
            //  state.error = action.payload
            state.status.authenticateUser ="success";
            state.message = action.payload.message 
            state.isAuthenticate = true;
            state.user = action.payload.user
            // localStorage.setItem("token" , action.payload.token)
        } )


        builder.addCase(authUser.rejected , (state , action)=>{
            state.error=action.error.message
            state.status.authenticateUser ="rejected"
            state.isAuthenticate=false
            state.message = action.error.message
        })


        builder.addCase(logoutUser.pending , (state , action)=>{
            state.status.logoutUser ="pending"
            state.error =null
            state.isAuthenticate=false
            state.user = {}
            state.message = null
        })
       
        builder.addCase(logoutUser.fulfilled ,(state , action)=>{
            //  state.error = action.payload
            state.status.logoutUser ="success";
            state.status.loginUser = ''
            state.message = action.payload.message 
            state.isAuthenticate = false;
            state.user = {}
            localStorage.setItem("token" , null)
        } )


        builder.addCase(logoutUser.rejected , (state , action)=>{
            state.error=action.error.message
            state.status.logoutUser ="rejected"
            state.status.loginUser = ''
            state.isAuthenticate=false
            state.message = action.error.message
        })

        // change password 

        builder.addCase(changePassword.pending , (state , action)=>{
            state.status.changePassword ="pending";
            state.error =null
        })
        builder.addCase(changePassword.fulfilled , (state , action)=>{
            state.status.changePassword ="success";
            state.error =null
            state.message = action.payload.message 
            state.isAuthenticate = true;
            state.user = action.payload.user
            localStorage.setItem("token" , action.payload.token)
        })
        builder.addCase(changePassword.rejected , (state , action)=>{
            state.status.changePassword ="rejected";
            state.error = action.error.message
            
        })


        builder.addCase(sendOtpForForgetPassword.pending , (state , action)=>{
            state.status.sendOtp ="pending";
            state.error =null
        })
        builder.addCase(sendOtpForForgetPassword.fulfilled , (state , action)=>{
            state.status.sendOtp ="success";
            state.error =null 
        })
        builder.addCase(sendOtpForForgetPassword.rejected , (state , action)=>{
            state.status.sendOtp ="rejected";
            state.error =null
        })


        builder.addCase(ForgetPasswordWithOtp.pending , (state , action)=>{
            state.status.forgetPassword ="pending";
            state.error =null
        })
        builder.addCase(ForgetPasswordWithOtp.fulfilled , (state , action)=>{
            state.status.forgetPassword ="success";
            state.error =null 
        })
        builder.addCase(ForgetPasswordWithOtp.rejected , (state , action)=>{
            state.status.forgetPassword ="rejected";
            state.error =null
        })




    }
})

export const { resateUserStatus }= userSlice.actions
export default userSlice.reducer