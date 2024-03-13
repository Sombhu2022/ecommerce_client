import axios from 'axios';
import React, { useState } from 'react'
import './login.scss'

import { useDispatch } from 'react-redux';
import { logInUser } from '../../../redux/user/userController';


function Login() {
	const [email, setEmail] = useState();
	const [password , setPassword]=useState();
    
	const dispatch = useDispatch()


	const submitHandle=async(e)=>{
		e.preventDefault();
		dispatch(logInUser({email , password}))
      
	}

  return (
	<div className='login-page'>
		<form action="" className='form' onSubmit={submitHandle}>
		<h2>Login Page</h2>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your Emil"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)}
          />

		  <button>Submit</button>
		</form>
	</div>
  )
}

export default Login