import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../baseURL";
import { FaCircle } from "react-icons/fa6";
import axios from "axios";

const Card = ({ id }) => {
  let [recipe, setRecipe] = useState([]);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [isveg, setIsVeg] = useState(true);
  let [mainregion, setMainRegion] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await axios.get(`${baseURL}/recipe/${id}`);
      setRecipe(res.data);
      setTitle(res.data.title);
      setIsVeg(res.data.isVeg);
      setDescription(res.data.description);
      setMainRegion(res.data.mainRegion);
    })();
  }, [setRecipe]);

  return (
    <div class="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        class="  w-full h-52 object-fill rounded-t-sm"
        src={recipe.coverimg}
        alt=""
      />

      <div class="p-5">
        <div className="flex justify-between items-center">
          <h5 className="mb-2  text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          {recipe.isveg ? (
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
        <p class="mb-3 text-xs text-gray-700 dark:text-orange-300">
          {description}{" "}
        </p>
        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400">
          Region :{" "}
          {mainregion.map((val, i) => {
            if (i === mainregion.length - 1) {
              return val;
            } else {
              return val + ",";
            }
          })}
        </p>
        <div class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Link to={`/recipe/${id}`}>Show Recipe</Link>
          <svg
            class="rtl:rotate-180 w-2.5 h-2.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Card;
