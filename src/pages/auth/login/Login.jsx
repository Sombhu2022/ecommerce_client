import axios from 'axios';
import React, { useState } from 'react'
import './login.scss'

import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../../../redux/user/userController';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
	const [email, setEmail] = useState();
	const [password , setPassword]=useState();
    
	const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)


	const submitHandle=async(e)=>{
		e.preventDefault();
		dispatch(logInUser({email , password}))
      
	}
  const navigate = useNavigate()

  if(user.status === "loginSuccess") navigate('/')

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

		  <button>Submit</button> <br></br>
    <h4> if you are not register 
      <Link to="/register">
        Register now 
      </Link>
    </h4>
    <Link to={'/auth/forgate-password'}>forgate password</Link>
		</form>
	</div>
  )
}

export default Login