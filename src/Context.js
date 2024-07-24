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
    return localStorage.getItem("isAuthenticated");
  });
  const [token, setToken] = useState(Cookies.get());

  useEffect(() => {
    (async () => {
      console.log("hello world");

      //const token = Cookies.get("token");
      console.log("token: ", token);
      console.log("user from context: ", user);

      if (token) {
        try {
          const isValid = await axios.get(`${baseURL}/user/`, {
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
            localStorage.setItem("isAuthenticated", false);
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error("Error validating token:", error);
          localStorage.removeItem("user");
          setIsAuthenticated(false);
          setUser(null);
          setToken(null);
        }
      } else {
        console.log("Token not found from context");
        localStorage.removeItem("user");
        // localStorage.removeItem("isAuthenticated");
        localStorage.setItem("isAuthenticated", false);

        setIsAuthenticated(false);
      }
    })();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
