import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../../redux/user/userController";
import { Link, useNavigate } from "react-router-dom";
import { spiral } from "ldrs";
import "./login.scss"; // Assuming this file contains your custom styles

function Login() {
  spiral.register();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
    
  };

  useEffect(() => {
    if (status.loginUser === "pending") setLoading(true);
  }, [user, status.loginUser]);
  
  if (status.loginUser === "success") navigate("/");
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <form className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full" onSubmit={submitHandle}>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <button
          type="submit"
          className="custom-button"
        >
          {!loading ? "Submit" : <l-spiral size="40" speed="0.9" color="white"></l-spiral>}
        </button>

        <p className="text-gray-600 mt-6 text-center">
          Don't have an account?
          <Link to="/register" className="text-pink-600 ml-2">Register now</Link>
        </p>
        <Link to="/auth/forgate-password" className="block text-center text-blue-600 mt-4">
          Forgot password
        </Link>
      </form>
    </div>
  );
}

export default Login;
