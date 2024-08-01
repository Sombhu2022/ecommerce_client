import axios from "axios";
import React, { useEffect, useState } from "react";
import "./login.scss";

import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../../redux/user/userController";
import { Link, useNavigate } from "react-router-dom";

import { spiral } from "ldrs";

function Login() {
  spiral.register();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);

  const submitHandle = async (e) => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
  };
  const navigate = useNavigate();
  console.log("redux data", user);
  useEffect(() => {
    if (status.loginUser === "success") navigate("/");
    if (status.loginUser === "pending") setLoading(true);
  }, [user, status.loginUser]);

  return (
    <div className="login-page">
      <form action="" className="form" onSubmit={submitHandle}>
        <h2 className="text-gray-600 text-2xl text-center">Login Page</h2>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter your Emil"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
       <button> {!loading ? (
          "Submit"
        ) : (
          <l-spiral size="40" speed="0.9" color="white"></l-spiral>
        )}</button>
        <br></br>
        <h4 className="text-gray-600 ml-4">
          {" "}
          if you are not register
          <Link to="/register" className="ml-4 text-blue-600">
            Register now
          </Link>
        </h4>
        <Link to={"/auth/forgate-password"} className="ml-4 text-blue-600">
          forgate password
        </Link>
      </form>
    </div>
  );
}

export default Login;
