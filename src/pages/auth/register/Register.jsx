import React, { useEffect, useState } from "react";
import "./register.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/user/userController";
import moment from 'moment'
import { Link, useNavigate } from "react-router-dom";

import { spiral } from "ldrs";

function Register() {
  spiral.register()
  const [isLoading , setIsLoading] = useState(false)
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();

  const [dp, setDp] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(state);

  const fileHandle = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      // if (reader.readyState === 2) {
      setDp(reader.result);
      // }
    };
    reader.readAsDataURL(file);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    // console.log(dp);

    const data = new FormData();
    data.append("dp", dp);
    data.set("name", name);
    data.set("email", email);
    data.set("password", password);

    dispatch(createUser(data));
 
  };

  useEffect(()=>{
    if(state.status.regUser === 'pending') setIsLoading(true)
      
  },[state.status.regUser])

  return (
    <div className="register_page">
      <form action="" className=" form shadow-lg" onSubmit={submitHandle}>
        <h2 className="text-2xl text-center text-gray-600">Register Page</h2>
        <input
          type="file"
          name="dp"
          id=""
          accept="image/*"
          onChange={fileHandle}
        />
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter Confirm Password"
          onChange={(e) => setCPassword(e.target.value)}
        />
         <button> {!isLoading ? (
          "Submit"
        ) : (
          <l-spiral size="40" speed="0.9" color="white"></l-spiral>
        )}</button>
        <br></br>
       <br/> <h4 className="pl-3 text-gray-600">if you are alrady register then  
        <Link to={'/login'} className="text-blue-600 ml-3">Log in</Link> </h4>
      </form>
      
      {
        state.user.createAt ? ( navigate('/')):""
      }
    </div>
  );
}

export default Register;
