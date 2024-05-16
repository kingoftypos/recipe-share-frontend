import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../baseURL";
import RandomRecipeCard from "./RandomRecipeCard";
const RandomRecipe = () => {
  const [vegRecipe, setVegRecipe] = useState([]);
  const [nonvegRecipe, setNonVegRecipe] = useState([]);

  useEffect(() => {
    (async () => {
      const vegRecipes = await axios.get(`${baseURL}/recipe`, {
        params: {
          isVeg: true,
        },
      });
      const nonvegRecipes = await axios.get(`${baseURL}/recipe`, {
        params: {
          isVeg: false,
        },
      });
      const vegId = Math.floor(Math.random() * vegRecipes.data.recipe.length);
      const nonvegId = Math.floor(
        Math.random() * nonvegRecipes.data.recipe.length
      );
      setVegRecipe(vegRecipes.data.recipe[vegId]);
      setNonVegRecipe(nonvegRecipes.data.recipe[nonvegId]);
    })();
  }, []);
  return (
    <div>
      <h1 className="m-10 text-4xl text-center">Random Recipe</h1>
      <div className="flex  mx-20 gap-5 items-center justify-center">
        <RandomRecipeCard recipe={vegRecipe} color="veg-green" />
        <RandomRecipeCard recipe={nonvegRecipe} />
      </div>
    </div>
  );
};

export default RandomRecipe;
