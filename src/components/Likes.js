import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
const Likes = () => {
  const likeHandler = () => {
    // implement logic to toggle like/dislike state
    console.log("Like handler called");
  };
  return (
    <div>
      <div className="flex">
        <AiFillLike onClick={likeHandler} />
        <AiFillDislike />
      </div>
    </div>
  );
};

export default Likes;
