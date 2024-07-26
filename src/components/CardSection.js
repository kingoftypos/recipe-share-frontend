import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { baseURL } from "../baseURL";
import RecipeCard from "./RecipeCard";

const CardSection = () => {
  let [recipe, setRecipe] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await axios.get(`${baseURL}/recipe`);

      setRecipe(res.data.recipe);
    })();
  }, [setRecipe]);
  //console.log("recipe from card section",recipe);
  return (
    <div>
      {recipe.map((val) => {
        return <Card id={val._id} />;
      })}
      {recipe.map((val) => {
        return (
          <RecipeCard id={val._id} img={recipe.coverImg}>
            <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="space-x-4 mt-4">
              <button className="social-media-btn ">
                <FaRegHeart className="icon" />
              </button>
              <button className="social-media-btn">
                <CiBookmark className="icon" />
              </button>
              <button className="social-media-btn ">
                <FaShareAlt className="icon" />
              </button>
            </div>
          </RecipeCard>
        );
      })}
    </div>
  );
};

export default CardSection;
