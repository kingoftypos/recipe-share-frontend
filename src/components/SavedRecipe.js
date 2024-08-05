import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../baseURL";
import Card from "./Card";

const SavedRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/user/savedrecipies`);
      setRecipes(res.data.savedRecipies);
    })();
  }, []);
  console.log(recipes);
  return (
    <div>
      <div className="mx-2">
        <h2 className="my-8 text-center text-3xl font-semibold">
          Saved Recipes
        </h2>
        <div className=" grid gap-y-12 grid-cols-4 ">
          {recipes.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SavedRecipe;
