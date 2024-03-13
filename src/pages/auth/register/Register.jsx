import React, { useState } from "react";
import "./register.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/user/userController";
import moment from 'moment'

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();

  const [dp, setDp] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

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

    const date = moment(state.user.createAt).format('MMM DD, YYYY, h:mm:ss A [GMT]');

    console.log(date);

    // const user = await axios.post("http://localhost:8080/user/register" , data ,{
    // 	headers:{
    // 		"Content-Type":"multipart/form-data"
    // 	},
    // 	withCredentials:true
    // })
    // console.log(user);
  };

  return (
    <div className="register_page">
      <form action="" className="form" onSubmit={submitHandle}>
        <h2>Register Page</h2>
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
        <button>Submit</button>
      </form>
      {state.status ==="pending" ? <div>loading</div> : ""}
      {
        state.user.createAt ? (<h1>{date}</h1>):""
      }
    </div>
  );
}

export default Register;
