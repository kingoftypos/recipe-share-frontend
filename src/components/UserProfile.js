import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../baseURL";
import AuthContext from "../Context";

const UserProfile = () => {
  const { user, setUser, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  if (isAuthenticated === false) {
    navigate("/login");
  }
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);

  const handleNameChange = () => {
    setIsEditingName(true);
  };

  const handleEmailChange = () => {
    setIsEditingEmail(true);
  };

  const confirmNameChange = async () => {
    try {
      const res = await axios.patch(`${baseURL}/user`, {
        name: newName,
        email: newEmail,
      });
      if (res) console.log("details updated successfully");
    } catch (err) {
      console.log("error while patch requesting");
    }

    setUser((prevUser) => ({ ...prevUser, name: newName }));
    setIsEditingName(false);
  };

  const confirmEmailChange = async () => {
    try {
      const res = await axios.patch(`${baseURL}/user`, {
        name: newName,
        email: newEmail,
      });
      if (res) console.log("details updated successfully");
    } catch (err) {
      console.log("error while patch requesting");
    }

    setUser((prevUser) => ({ ...prevUser, email: newEmail }));
    setIsEditingEmail(false);
  };

  useEffect(() => {
    setNewName(user.name);
    setNewEmail(user.email);
  }, [user]);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white overflow-hidden shadow-md rounded-lg border border-gray-200">
        <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">User Profile</h3>
          <p className="mt-1 text-sm text-gray-600">
            This is some information about the user.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 bg-gray-50 hover:bg-gray-100 transition">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-between">
                {isEditingName ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                  />
                ) : (
                  user.name
                )}
                <button
                  onClick={isEditingName ? confirmNameChange : handleNameChange}
                  className="ml-4 text-sm text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {isEditingName ? "Confirm" : "Change Name"}
                </button>
              </dd>
            </div>
            <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 bg-white hover:bg-gray-50 transition">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-between">
                {isEditingEmail ? (
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                  />
                ) : (
                  user.email
                )}
                <button
                  onClick={
                    isEditingEmail ? confirmEmailChange : handleEmailChange
                  }
                  className="ml-4 text-sm text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {isEditingEmail ? "Confirm" : "Change Email"}
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
