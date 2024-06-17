import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../Context";
import axios from "axios";
import { baseURL } from "../baseURL";
import MyRecipes from "../components/MyRecipes";

const Userprofilepage = () => {
  const { user, setUser } = useContext(AuthContext);
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
    <div>
      <div className="container mx-auto p-4">
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is some information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-between">
                  {isEditingName ? (
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    user.name
                  )}
                  <button
                    onClick={
                      isEditingName ? confirmNameChange : handleNameChange
                    }
                    className="text-sm text-blue-500 hover:text-blue-700"
                  >
                    {isEditingName ? "Confirm" : "Change Name"}
                  </button>
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center justify-between">
                  {isEditingEmail ? (
                    <input
                      type="text"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    user.email
                  )}
                  <button
                    onClick={
                      isEditingEmail ? confirmEmailChange : handleEmailChange
                    }
                    className="text-sm text-blue-500 hover:text-blue-700"
                  >
                    {isEditingEmail ? "Confirm" : "Change Email"}
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/* <MyRecipes /> */}
    </div>
  );
};

export default Userprofilepage;
