import React, { useState } from 'react'
import API from '../../../utils/axiosSetup';
import { baseUrl } from '../../../App';

function NewPass() {
   
  const [otp , setOtp] = useState(null);
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const handleLogin = async(e)=>{
    e.preventDefault();
    try {
      const {data} = await API.post(`${baseUrl}/user/forgotPass` , 
        { otp , password } , 
        { headers:{
          Content_type: "application/json",
        }}
      )
      console.log("success" , data);
    } catch (error) {
      console.log(error);
    }

  }

  return (
     
  <div className='forgot_container'>
  <form action="" className='auth-form' onSubmit={handleLogin}>
  <b style={{fontSize:"25px" }}>Forgot password</b>
  <input type="number" name="otp" id="" placeholder='enter otp ' onChange={(e)=>setOtp(e.target.value) }/>
  <input type="password" name="newPassword" id="" placeholder='enter new password ' onChange={(e)=>setPassword(e.target.value)}/>
  <input type="password" name="confirmNewPassword" id="" placeholder='enter confirm password ' onChange={(e)=>setConfirmPassword(e.target.value)}/>
  <button type='submit'>change password</button>

  </form>

</div>
  )
}

export default NewPass