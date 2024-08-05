import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa6";

import RecipeCard from "./RecipeCard";
import ShareIcon from "./ShareIcon";
import SaveButton from "./SaveButton";
import LikeButton from "./LikeButton";
import AuthContext from "../Context";
import EditAndDeleteButton from "./EditAndDeleteButton";
const Card = ({ item, setRecipes }) => {
  const { user } = useContext(AuthContext);
  const truncateText = (text) => {
    return text.length > 100 ? text.substring(0, 99) + "..." : text;
  };
  return (
    <Link to={`/recipe/${item._id}`}>
      <RecipeCard
        key={item._id}
        id={item._id}
        img={item.coverImg}
        recipe={item}
      >
        <div className="flex gap-3 items-center">
          <h3 className="text-xl font-bold mb-2 self-center">{item.title}</h3>
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
        <p>{truncateText(item.description)}</p>
        <div className="space-x-2 mt-4 flex">
          <LikeButton id={item._id} liked={item.likes} />
          <SaveButton id={item._id} saved={item.savedBy} />
          <div
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <ShareIcon id={item._id} />
            {item.createdBy === user._id ? (
              <EditAndDeleteButton id={item._id} setRecipes={setRecipes} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </RecipeCard>
    </Link>
  );
};

export default Card;
