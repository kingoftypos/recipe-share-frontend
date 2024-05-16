import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../baseURL";
import { FaCircle } from "react-icons/fa6";
import axios from "axios";

const Card = ({ id }) => {
  let [recipe, setRecipe] = useState([]);
  let [mainregion, setMainRegion] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await axios.get(`${baseURL}/recipe/${id}`);
      setRecipe(res.data);
      setMainRegion(res.data.mainRegion);
    })();
  }, [setRecipe]);

  return (
    <div className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img
    className="w-full h-52 object-fill rounded-t-sm"
    src={recipe.coverImg}
    alt=""
  />

  <div className="p-5">
    <div className="flex justify-between items-center">
      <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
        {recipe.title}
      </h5>
      {recipe.isVeg ? (
        <FaCircle
          style={{
            color: "green",
            background: "white",
            fontSize: "17px",
            padding: "4px",
            border: "1px solid black",
          }}
        />
      ) : (
        <FaCircle
          style={{
            color: "red",
            background: "white",
            fontSize: "17px",
            padding: "4px",
            border: "1px solid black",
          }}
        />
      )}
    </div>
    <p className="mb-3 text-xs text-gray-700 dark:text-orange-300">
      {recipe.description}{" "}
    </p>
    <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
      Region :{" "}
      {mainregion.map((val, i) => {
        if (i === mainregion.length - 1) {
          return val;
        } else {
          return val + ",";
        }
      })}
    </p>
    <div className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <Link to={`/recipe/${id}`}>Show Recipe
      <svg
        className="rtl:rotate-180 w-2.5 h-2.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
        
      </svg>
      </Link>
    </div>
  </div>
</div>

  );
};
export default Card;
