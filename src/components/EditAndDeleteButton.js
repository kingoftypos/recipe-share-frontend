import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../baseURL";
import Swal from "sweetalert2";
const EditAndDeleteButton = ({ id, setRecipes }) => {
  
  const deleteRecipeHandler = async () => {
    // console.log("id", id);
    Swal.fire({
      title: `Are you sure you want to delete?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecipe(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const deleteRecipe = async (id) => {
    // console.log("id from second delete", id);
    const res = await axios.delete(`${baseURL}/recipe/${id}`);
    const newRecipes = await axios.get(`${baseURL}/user/recipes`);
    setRecipes(newRecipes.data.recipes);
  };

  // if (recipes.length === 0) {
  //   return <h1>No recipes</h1>;
  // }
  return (
    <>
      <Link to={`/edit/recipe/${id}`}>
        <button className="social-media-btn">
          <MdModeEditOutline className="icon" />
        </button>
      </Link>
      <button className="social-media-btn">
        <MdDelete className="icon" onClick={deleteRecipeHandler} />
      </button>
    </>
  );
};

export default EditAndDeleteButton;
