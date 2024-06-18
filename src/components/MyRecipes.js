import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context";
import axios from "axios";
import { baseURL } from "../baseURL";
import Swal from "sweetalert2";

const MyRecipes = () => {
  const { isAutheticated } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/user/recipes`);
      setRecipes(res.data.recipes);
    })();
  }, []);
  const deleteRecipeHandler = async (id) => {
    // console.log("id", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecipe(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const deleteRecipe = async (id) => {
    // console.log("id from second delete", id);
    const res = await axios.delete(`${baseURL}/recipe/${id}`);
    const newRecipes = await axios.get(`${baseURL}/user/recipes`);
    setRecipes(newRecipes.data.recipes);
  };
  if (recipes.length === 0) {
    return <h1>No recipes</h1>;
  }

  return (
    <div>
      <div className="mx-16">
        <h2 className="my-8 text-center text-3xl font-semibold">Your Recipes</h2>
        <div className=" grid gap-y-12 grid-cols-4 ">
          {recipes.map((recipe, index) => {
            return (
              <div className="w-10/12 bg-slate-200 " key={index}>
                <div className="border   ">
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
                    <div className="px-6 py-4">
                      <button
                        type="button"
                        className="w-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteRecipeHandler(recipe._id)}
                        type="button"
                        className="w-24 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
