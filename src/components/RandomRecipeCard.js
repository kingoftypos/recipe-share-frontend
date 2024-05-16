import React from "react";
import { Link } from "react-router-dom";
const RandomRecipeCard = ({ recipe }) => {
  return (
    <div className="h-72">
      <Link
        to={`/recipe/${recipe._id}`}
        className="flex flex-col items-center border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-72"
      >
        <img
          className="object-cover w-1/3 h-96 md:w-2/4 md:h-72 md:rounded-none "
          src={recipe.coverImg}
          alt={recipe.title}
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-2/3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {recipe.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {recipe.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RandomRecipeCard;
