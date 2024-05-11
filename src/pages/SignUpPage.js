import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../baseURL";
import Swal from "sweetalert2";
const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //console.log(`${baseURL}/user/register`);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/user/register`, {
        name,
        email,
        password,
      });
      Swal.fire({
        icon: "success",
        title: "Successfull Regristration. ",
        text: "Please Login now to continue",
      });
      navigate("/");
    } catch (error) {
      setError(error);
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div className="container mx-auto border border-solid border-black border-2">
      <h2 className="text-3xl font-sans">Sign Up</h2>
      <form onSubmit={submitHandler} className="">
        <div className="flex flex-col m-3 max-w-60">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
