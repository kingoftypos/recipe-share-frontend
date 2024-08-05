import React, { useEffect, useState } from "react";

import axios from "axios";
import { baseURL } from "../baseURL";
import Swal from "sweetalert2";
import Card from "./Card";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/user/recipes`);
      setRecipes(res.data.recipes);
    })();
  }, []);

  if (recipes.length === 0) {
    return <h1>No recipes</h1>;
  }

  return (
    <div>
      <div className="mx-2">
        <h2 className="my-8 text-center text-3xl font-semibold gap-3">
          Your Recipes
        </h2>
        <div className=" grid gap-y-12 grid-cols-4 ">
          {recipes.map((item) => {
            return <Card item={item} setRecipes={setRecipes} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyRecipes;
