import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../baseURL";
import Swal from "sweetalert2";

const LoginPage= ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // axios.defaults.withCredentials=true;
  const submitHandler= async (e)=>{
    e.preventDefault();
    try{
        await axios.post(`${baseURL}/user/login`,{
          email,
          password
        });
        navigate("/");
    }
    catch(err)
    {
      setError(err)
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  return(
<div className="container mx-auto border border-solid border-black border-2">
      <h2 className="text-3xl font-sans">Login</h2>
      <form onSubmit={submitHandler} className="">
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
        <button type="submit" className="">Login</button>
      </form>
    </div>  );
}
export default LoginPage;