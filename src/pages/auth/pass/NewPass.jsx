import React, { useEffect, useState } from 'react'
import API from '../../../utils/axiosSetup';
import { baseUrl } from '../../../App';

import { spiral } from "ldrs";
import { useDispatch, useSelector } from 'react-redux';
import { ForgetPasswordWithOtp } from '../../../redux/user/userController';
import { useNavigate } from 'react-router-dom';

function NewPass() {
   spiral.register()
   const [loading , setLoading] = useState(false)
  const [otp , setOtp] = useState(null);
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.user)
  const navigate = useNavigate()

  const handleLogin = async(e)=>{
    e.preventDefault();
   dispatch(ForgetPasswordWithOtp({otp , password}))

  }

  useEffect(()=>{
     if(status.forgetPassword === 'pending') setLoading(true)
     if(status.forgetPassword === 'success') navigate('/login')
  } , [status])

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'> 

  <form action="" className='form' onSubmit={handleLogin}>
  <h4 className='text-2xl text-gray-600 text-center'>Forgot password</h4>
  <input type="number" name="otp" id="" placeholder='enter otp ' onChange={(e)=>setOtp(e.target.value) }/>
  <input type="password" name="newPassword" id="" placeholder='enter new password ' onChange={(e)=>setPassword(e.target.value)}/>
  <input type="password" name="confirmNewPassword" id="" placeholder='enter confirm password ' onChange={(e)=>setConfirmPassword(e.target.value)}/>
      <button> {!loading ? (
          "Submit"
        ) : (
          <l-spiral size="40" speed="0.9" color="white"></l-spiral>
        )}</button>

  </form>

</div>
  )
}

export default NewPass