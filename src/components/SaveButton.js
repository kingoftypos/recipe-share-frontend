import React, { useState, useContext, useEffect } from "react";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import AuthContext from "../Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../baseURL";

const SaveButton = ({ id, saved }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [recipeSaved, setRecipeSaved] = useState(false);

  useEffect(() => {
    if (isAuthenticated && saved.includes(user._id)) {
      setRecipeSaved(true);
    } else {
      setRecipeSaved(false);
    }
  }, [isAuthenticated, saved]);

  // console.log("saved: ", saved.includes(user._id));

  const saveButtonHandler = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isAuthenticated === false) {
      navigate("/login", { replace: true });
    }
    const newRecipeSaved = !recipeSaved;
    setRecipeSaved(newRecipeSaved);

    try {
      const url = `${baseURL}/recipe/${
        newRecipeSaved ? "saverecipes" : "unsaverecipes"
      }/${id}`;
      const res = await axios.patch(url);
    } catch (error) {
      console.error("Error updating recipe saved status", error);
      // Roll back the state update in case of an error
      setRecipeSaved(!newRecipeSaved);
    }
  };

  return (
    <button className="social-media-btn" onClick={saveButtonHandler}>
      <PiBookmarkSimpleFill
        className="icon"
        color={recipeSaved ? "green" : "white"}
      />
    </button>
  );
};

export default SaveButton;
