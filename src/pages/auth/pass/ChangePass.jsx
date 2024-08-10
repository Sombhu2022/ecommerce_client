import React, { useState } from 'react'
import API from '../../../utils/axiosSetup';
import { baseUrl } from '../../../App';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../../redux/user/userController';

function ChangePass() {

  const [oldPassword , setOldPassword] = useState("");
  const [newPassword , setNewPassword ] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    dispatch(changePassword({oldPassword , newPassword}))   
  
  } 

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'> 
        <form action="" className='form' onSubmit={handleSubmit}>
          <h4 className='text-2xl text-gray-600 text-center'>Change password</h4>

            <input type="password" placeholder='Enter Old Password' onChange={(e)=>setOldPassword(e.target.value)}/>
            <input type="password" placeholder='Enter new password' onChange={(e)=>setNewPassword(e.target.value)} />
            <button type="submit">Change Password</button>
        </form>
    </div>
  )
}

export default ChangePass