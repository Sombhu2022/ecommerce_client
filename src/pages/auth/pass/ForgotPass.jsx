import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./forgot.scss";
import API from "../../../utils/axiosSetup";
import { baseUrl } from "../../../App";

function ForgotPass() {
	
	const [email , setEmail] = useState({});
	const navigate = useNavigate();
	
	const handleLogin = async (e) => {
		e.preventDefault();
  
		try {
			const { data } =await API.post(`${baseUrl}/user/sendOtp` , {email}, {
				headers: {
				  Content_type: "application/json",
				}})
	
			console.log("success", data);
			navigate('/auth/forgate-password/new-password')
		} catch (error) {
			console.log(error);
			
		}
	};
	return (
		
		<div className='w-[100vw] h-[100vh] flex justify-center items-center'> 
				<form action='' className='form min-w-[300px]' onSubmit={handleLogin}>
					<h4 className="text-center text-gray-600 text-2xl">Forgot password</h4>

					<input
						type='email'
						name='email'
						id=''
						placeholder='enter valid email '
						onChange={(e)=>setEmail(e.target.value)}
					/>
					<button type='submit'>next</button>{" "}
				</form>
			</div>
	
	);
}

export default ForgotPass;
