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
		<div>
			<div className='forgot_container'>
				<form action='' className='auth-form' onSubmit={handleLogin}>
					<b style={{ fontSize: "25px" }}>Forgot password</b>

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
		</div>
	);
}

export default ForgotPass;
