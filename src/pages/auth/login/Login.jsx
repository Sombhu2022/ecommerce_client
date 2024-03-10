import axios from 'axios';
import React, { useState } from 'react'
import './login.scss'

function Login() {
	const [email, setEmail] = useState();
	const [password , setPassword]=useState();

	const submitHandle=async(e)=>{
		e.preventDefault();
		try {
			
			const user = await axios.post("http://localhost:8080/user/login" , {email , password},{
				headers:{
					"Content-Type":"application/json"
				},
				withCredentials:true
			})
			
			console.log(user);
		} catch (error) {
			console.log(error);
		}
      
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