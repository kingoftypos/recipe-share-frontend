import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context";
import axios from "axios";
import { baseURL } from "../baseURL";
const MyRecipes = () => {
  const { isAutheticated } = useContext(AuthContext);
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
      <div className="mx-16">
        <div className=" grid grid-cols-4  bg-red-600">
          {recipes.map((recipe) => {
            return (
              <div className="w-10/12 bg-slate-200 ">
                <div className="border   ">
                  <div>
                    <div>
                      <img src={recipe.coverImg} alt="" />
                    </div>
                    <div>
                      <div>{recipe.title}</div>
                      <div>{recipe.description}</div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyRecipes;
