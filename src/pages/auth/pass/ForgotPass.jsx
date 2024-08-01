import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./forgot.scss";
import API from "../../../utils/axiosSetup";
import { baseUrl } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import { sendOtpForForgetPassword } from "../../../redux/user/userController";
import { spiral } from "ldrs";

function ForgotPass() {
	spiral.register()
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.user);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    dispatch(sendOtpForForgetPassword(email));
    // console.log("success", data);
    //
  };

  useEffect(() => {
    if (status.sendOtp === "success")
      navigate("/auth/forgate-password/new-password");
    if (status.sendOtp === "pending") setIsLoading(true);
  }, [status]);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <form action="" className="form min-w-[300px]" onSubmit={handleSendOtp}>
        <h4 className="text-center text-gray-600 text-2xl">Forgot password</h4>

        <input
          type="email"
          name="email"
          id=""
          placeholder="enter valid email "
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>
          {" "}
          {!isLoading ? (
            "Next"
          ) : (
            <l-spiral size="40" speed="0.9" color="white"></l-spiral>
          )}
        </button>
      </form>
    </div>
  );
}

export default ForgotPass;
