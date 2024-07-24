import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../baseURL";
import { FaCircle } from "react-icons/fa6";
import axios from "axios";
import Likes from "./Likes";

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

  const truncateDescription = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return (
    <>
      {/* <Likes /> */}
      <Link to={`/recipe/${id}`}>
        <div className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-full h-52 object-fill rounded-t-lg"
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
              {truncateDescription(recipe.description, 150)}{" "}
            </p>
            {mainregion.length > 1 && (
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
            )}
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
