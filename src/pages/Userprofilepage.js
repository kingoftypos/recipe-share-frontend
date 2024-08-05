import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../Context";
import MyRecipes from "../components/MyRecipes";
import { useNavigate } from "react-router-dom";
import SavedRecipe from "../components/SavedRecipe";
import UserProfile from "../components/UserProfile";

const Userprofilepage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  if (isAuthenticated === false) {
    navigate("/login");
  }

  return (
    <div>
      <UserProfile />
      <MyRecipes />
      <SavedRecipe />
    </div>
  );
};

export default Userprofilepage;
