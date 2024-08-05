import React, { useState, useContext, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import AuthContext from "../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../baseURL";
const LikeButton = ({ id, liked }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [recipeLiked, setRecipeLiked] = useState(false);
  useEffect(() => {
    if (isAuthenticated && liked.includes(user._id)) {
      setRecipeLiked(true);
    } else {
      setRecipeLiked(false);
    }
  }, [isAuthenticated, liked]);

  const likeButtonHandler = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isAuthenticated === false) {
      navigate("/login", { replace: true });
    }
    const newRecipeLiked = !recipeLiked;
    setRecipeLiked(newRecipeLiked);

    try {
      const url = `${baseURL}/recipe/${
        newRecipeLiked ? "like" : "unlike"
      }/${id}`;
      const res = await axios.patch(url);
    } catch (error) {
      console.error("Error updating recipe liked status", error);
      // Roll back the state update in case of an error
    }
  };
  return (
    <button className="social-media-btn" onClick={likeButtonHandler}>
      <AiFillHeart className="icon" color={recipeLiked ? "red" : "white"} />
    </button>
  );
};

export default LikeButton;
