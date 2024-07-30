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
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'> 

  <form action="" className='form' onSubmit={handleLogin}>
  <h4 className='text-2xl text-gray-600 text-center'>Forgot password</h4>
  <input type="number" name="otp" id="" placeholder='enter otp ' onChange={(e)=>setOtp(e.target.value) }/>
  <input type="password" name="newPassword" id="" placeholder='enter new password ' onChange={(e)=>setPassword(e.target.value)}/>
  <input type="password" name="confirmNewPassword" id="" placeholder='enter confirm password ' onChange={(e)=>setConfirmPassword(e.target.value)}/>
  <button type='submit'>change password</button>

  </form>

</div>
  )
}

export default NewPass