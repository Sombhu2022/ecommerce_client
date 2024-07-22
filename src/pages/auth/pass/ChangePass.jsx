import React, { useState } from 'react'
import API from '../../../utils/axiosSetup';
import { baseUrl } from '../../../App';

function ChangePass() {

  const [oldPassword , setOldPassword] = useState("");
  const [newPassword , setNewPassword ] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();
     try {
       const { data } = await API.post(`${baseUrl}/user/changePassword` , { oldPassword , newPassword},
        {
          headers:{
            "Content-Type":"application/json"
          }
        }
       )
       console.log(data);
     } catch (error) {
      console.log(error);
     }
  } 

  return (
    <div> 
        <form action="" className='form' onSubmit={handleSubmit}>
            <input type="password" placeholder='Enter Old Password' onChange={(e)=>setOldPassword(e.target.value)}/>
            <input type="password" placeholder='Enter new password' onChange={(e)=>setNewPassword(e.target.value)} />
            <button type="submit">Change Password</button>
        </form>
    </div>
  )
}

export default ChangePass