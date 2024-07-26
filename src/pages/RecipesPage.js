import React, { useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import RecipeCard from "../components/RecipeCard";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
const RecipesPage = () => {
  let [result, setResult] = useState([]);
  console.log("result: ", result);

  return (
    <div className="flex flex-col items-center space-y-8">
      <Search setResult={setResult} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {result.map((item) => (
          <Card key={item._id} id={item._id} />
        ))}
        {result.map((item) => {
          return (
            <RecipeCard key={item._id} id={item._id} img={item.coverImg}>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>
                Tomato rice, or tomato biryani, is a special type of spiced rice
                traditionally cooked in South India.
              </p>
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
    </div>
  );
};

export default RecipesPage;
