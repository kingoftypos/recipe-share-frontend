import React, { useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import RecipeCard from "../components/RecipeCard";
import { FaRegHeart } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import ShareIcon from "../components/ShareIcon";
import { Link } from "react-router-dom";
import SaveButton from "../components/SaveButton";
import LikeButton from "../components/LikeButton";

const RecipesPage = () => {
  let [result, setResult] = useState([]);
  console.log("result: ", result);

  return (
    <div className="flex flex-col items-center space-y-8">
      <Search setResult={setResult} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* {result.map((item) => (
          <Card key={item._id} id={item._id} />
        ))} */}
        {result.map((item) => {
          return (
            <Link to={`/recipe/${item._id}`}>
              <RecipeCard
                key={item._id}
                id={item._id}
                img={item.coverImg}
                recipe={item}
              >
                <div className="flex gap-3 items-center">
                  <h3 className="text-xl font-bold mb-2 self-center">
                    {item.title}
                  </h3>
                  <span>
                    {item.isVeg ? (
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
                  </span>
                </div>
                <p>
                  Tomato rice, or tomato biryani, is a special type of spiced
                  rice traditionally cooked in South India.
                </p>
                <div className="space-x-4 mt-4 flex">
                  <LikeButton id={item._id} liked={item.likes} />
                  <SaveButton id={item._id} saved={item.savedBy} />
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  >
                    <ShareIcon id={item._id} />
                  </div>
                </div>
              </RecipeCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecipesPage;
