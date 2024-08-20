import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/user/userController";
import { Link, useNavigate } from "react-router-dom";
import { spiral } from "ldrs";

function Register() {
  spiral.register();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [dp, setDp] = useState(null);
  const [preview, setPreview] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const navigate = useNavigate();

  const fileHandle = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDp(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("dp", dp);
    data.set("name", name);
    data.set("email", email);
    data.set("password", password);

    dispatch(createUser(data));
  };

  useEffect(() => {
    if (state.status.regUser === "pending") setIsLoading(true);
  }, [state.status.regUser]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <form
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full m-2"
        onSubmit={submitHandle}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Profile Picture</label>
          <div className="flex items-center">
            <input
              type="file"
              name="dp"
              accept="image/*"
              onChange={fileHandle}
              className="hidden"
              id="profilePicture"
            />
            <label
              htmlFor="profilePicture"
              className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Choose Image
            </label>
            {preview && (
              <img
                src={preview}
                alt="Profile Preview"
                className="ml-4 w-16 h-16 rounded-full border border-gray-300 object-cover"
              />
            )}
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
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

        <div className="mb-4">
          <input
            type="password"
            name="cPassword"
            placeholder="Confirm Password"
            onChange={(e) => setCPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <button
          type="submit"
          className="custom-button"
        >
          {!isLoading ? (
            "Submit"
          ) : (
            <l-spiral size="40" speed="0.9" color="white"></l-spiral>
          )}
        </button>

        <p className="text-gray-600 mt-6 text-center">
          Already have an account?
          <Link to="/login" className="text-pink-600 ml-2">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
