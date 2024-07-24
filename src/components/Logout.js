import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import AuthContext from "../Context";
const Logout = () => {
  let navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    const allCookies = Cookies.get();
    const pastDate = new Date(0);

    for (let cookieName in allCookies) {
      Cookies.remove(cookieName, { expires: pastDate });
    }

    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <button
      type="button"
      className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
