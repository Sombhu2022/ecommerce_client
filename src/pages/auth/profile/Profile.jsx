import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './profile.scss'

function Profile() {
    const { user , isAuthenticate} = useSelector((state)=> state.user)
    const [ profile , setProfile ] = useState({})
    console.log(user);

  return (
    <div className='profile-container'>
        <img src={user?.dp?.url} alt="" />
        <div className='user-info'>
             <p>name : {user?.name}</p>

        </div>
        <div className='option-container'>
            <Link to={'/profile/changePassword'} className='text-blue-600'>
              Change Password
            </Link>
            <Link>
            </Link>
        </div>

    </div>
  )
}

export default Profile