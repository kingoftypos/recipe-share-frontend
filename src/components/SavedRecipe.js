import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../baseURL";

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
      <div className="mx-16">
        <h2 className="my-8 text-center text-3xl font-semibold">
          Saved Recipes
        </h2>
        <div className=" grid gap-y-12 grid-cols-4 ">
          {recipes.map((recipe, index) => {
            return (
              <Link to={`/recipe/${recipe._id}`}>
                <div className="w-10/12 bg-slate-200 " key={index}>
                  <div className="border   ">
                    <div className="flex flex-col justify-between">
                      <div>
                        <div>
                          <img
                            src={recipe.coverImg}
                            alt=""
                            className="h-32 w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-center py-2 text-lg font-medium">
                            {recipe.title}
                          </div>
                          <div className="px-3 text-sm font-normal">
                            {recipe.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SavedRecipe;
