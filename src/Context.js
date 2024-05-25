import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { baseURL } from "./baseURL";
import Cookies from "js-cookie";
axios.defaults.withCredentials = true;

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
    const verifyUser = async () => {
      try {
        const token = Cookies.get("token");
        console.log("token: ", token);
        console.log("user from context: ", user);

        if (token) {
          const isValid = await axios.get(`${baseURL}/user/protectroute`, {
            withCredentials: true,
            credentials: "include",
          });
          console.log("isValid: ", isValid);

          if (isValid.status === 200) {
            setUser(isValid.data);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(isValid.data));
            localStorage.setItem("isAuthenticated", "true");
          } else {
            localStorage.removeItem("user");
            localStorage.removeItem("isAuthenticated");
            setIsAuthenticated(false);
          }
        } else {
          console.log("Token not found from context");
          localStorage.removeItem("user");
          localStorage.removeItem("isAuthenticated");
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error verifying user: ", error);
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
        setIsAuthenticated(false);
      }
    };

    verifyUser();
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
