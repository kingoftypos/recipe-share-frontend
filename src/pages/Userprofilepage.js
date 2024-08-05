import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../Context";
import axios from "axios";
import { baseURL } from "../baseURL";
import MyRecipes from "../components/MyRecipes";
import { useNavigate } from "react-router-dom";
import SavedRecipe from "../components/SavedRecipe";

const Userprofilepage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  if (isAuthenticated === false) {
    navigate("/login");
  }

  return (
    <div>
      <Userprofilepage />
      <MyRecipes />
      <SavedRecipe />
    </div>
  );
};

export default Userprofilepage;
