import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./forgot.scss";

function ForgotPass() {
	const [pass, setPass] = useState({});
	const navigate = useNavigate();
	const hendleData = (e) => {
		setPass({ ...pass, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const { data } = await axios.post(
				"http://localhost:8080/auth/forgotPassword",
				pass,
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			toast.success(data.message);
			console.log("success", data);
			navigate("/");
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
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
						onChange={hendleData}
					/>
					<Link to={"/auth/forgotPassword/newpass"}>
						{" "}
						<button type='submit'>next</button>{" "}
					</Link>
				</form>
			</div>
		</div>
	);
}

export default ForgotPass;
