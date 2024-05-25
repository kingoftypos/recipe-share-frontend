

import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseURL } from "./baseURL";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  useEffect(() => {
    // const loginApiCall = async (payload) => {
    //   await axios.post(`${baseURL}/user/login`, payload, {
    //     withCredentials: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const user = await axios.get(`${baseURL}/user`, {
    //     withCredentials: true,
    //     credentials: "include",
    //   });
    // };
    (async () => {
      console.log("hello world");

      const token = Cookies.get("token");
      console.log("token: ", token);
      console.log("user from context: ", user);

      if (token) {
        const isValid = await axios.get(`${baseURL}/user/protectroute`, {
          withCredentials: true,
          credentials: "include",
        });
        console.log("isvalid: ", isValid);
        if (isValid.status === 200) {
          setUser(isValid.data);
          console.log("user from isvalid: ", user);
          setIsAuthenticated(true);
          localStorage.setItem("user", JSON.stringify(isValid.data));
          localStorage.setItem("isAuthenticated", true);
        } else {
          localStorage.removeItem("user");
          setIsAuthenticated(false);
        }
      } else {
        console.log("Token not found from context");
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
        //setIsAuthenticated(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


