import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { baseURL } from "../baseURL";
import axios from "axios";
import { TagsInput } from "react-tag-input-component";
import Swal from "sweetalert2";

const EditRecipePage = () => {
  let { id } = useParams();
  //   console.log(id);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainIngredients, setMainIngredients] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [mainRegion, setMainRegion] = useState([]);
  const [course, setCourse] = useState("");
  const [serving, setServing] = useState("");
  const [image, setImage] = useState("");
  const [isVeg, setIsVeg] = useState(true);
  const [cuisine, setCuisine] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      let res = await axios.get(`${baseURL}/recipe/${id}`);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setMainIngredients(res.data.mainIngredients);
      setAllIngredients(res.data.allIngredients);
      setSteps(res.data.steps);
      setMainRegion(res.data.mainRegion);
      setCourse(res.data.course);
      setServing(res.data.serving);
      setImage(res.data.coverImg);
      setIsVeg(res.data.isVeg);
      setCuisine(res.data.cuisine);
      //   console.log(res.data);
    })();
  }, [id]);

  const [currentStep, setCurrentStep] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedStep, setEditedStep] = useState("");

  const handleAddStep = () => {
    if (currentStep.trim() !== "") {
      setSteps([...steps, currentStep.trim()]);
      setCurrentStep("");
    }
  };

  const handleEditStep = (index) => {
    setEditIndex(index);
    setEditedStep(steps[index]);
  };

  const handleUpdateStep = () => {
    const updatedSteps = [...steps];
    updatedSteps[editIndex] = editedStep.trim();
    setSteps(updatedSteps);
    setEditIndex(null);
    setEditedStep("");
  };

  const handleRemoveStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  const submitEditedRecipeHandler = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const res = patchRequest();
        if (res === 200) Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const patchRequest = async () => {
    try {
      const res = await axios.patch(`${baseURL}/recipe/${id}`, {
        title,
        description,
        mainIngredients,
        allIngredients,
        steps,
        mainRegion,
        course,
        serving,
        coverImg: image,
        isVeg,
        cuisine,
      });
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Your recipe has been saved",
        });
        navigate("/profile");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <div className="mx-5 ">
        <h1 className="my-4 text-3xl text-center">Edit Recipe</h1>
        <form onSubmit={submitEditedRecipeHandler}>
          <div className="grid gap-4 mx-10 sm:grid-cols-2 sm:gap-6 ">
            <div className="  sm:col-span-2 ">
              {/* TITLE DIV */}
              <div class="mb-6">
                <label
                  for="title"
                  class="block text-lg font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="  sm:col-span-2 ">
              {/* DESCRIPTION DIV */}
              <div class="mb-6">
                <label
                  for="message"
                  class="block text-lg font-medium text-gray-800 mb-1"
                >
                  Description
                </label>
                <textarea
                  value={description}
                  id="message"
                  name="message"
                  class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows="5"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="  sm:col-span-2 ">
              {/* Cover img div */}
              <div class="mb-6">
                <label
                  for="title"
                  class="block text-lg font-medium text-gray-700 mb-1"
                >
                  Cover Image
                </label>
                <input
                  value={image}
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
            <div className=" flex  sm:col-span-2">
              {/* Is veg div */}
              <div>
                <label
                  for="isveg"
                  className="block text-lg font-medium text-gray-800 mb-1 "
                >
                  Is the dish veg
                </label>
                <div className="flex gap-4">
                  <label className="flex gap-1">
                    <input
                      type="radio"
                      name="isveg"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="is veg"
                      required=""
                      value="true"
                      checked={isVeg === true}
                      onChange={(e) => setIsVeg(true)}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex gap-1">
                    <input
                      type="radio"
                      name="isveg"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="is veg"
                      required=""
                      value="false"
                      checked={isVeg === false}
                      onChange={(e) => setIsVeg(false)}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between sm:col-span-2">
              {/* CUSINE DIV */}
              <div className="">
                <label
                  for="cuisine"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  Cuisine
                </label>
                <input
                  value={cuisine}
                  type="text"
                  id="cuisine"
                  name="cuisine"
                  className="w px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                  onChange={(e) => setCuisine(e.target.value)}
                />
              </div>
              {/* COURSE DIV */}
              <div className="">
                <label
                  for="course"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  Course
                </label>
                <input
                  value={course}
                  type="text"
                  id="course"
                  name="course"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  onChange={(e) => setCourse(e.target.value)}
                  required
                />
              </div>
              {/* SERVING DIV */}
              <div>
                <label
                  for="serving"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  Serving
                </label>
                <input
                  value={serving}
                  type="text"
                  id="serving"
                  name="serving"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  onChange={(e) => setServing(e.target.value)}
                  required
                />
              </div>
              {/* MAIN REGION DIV */}
              <div className="w-1/3">
                <label
                  for="mainregion"
                  className="block text-lg font-medium text-gray-800 mb-1 "
                >
                  Main Regoin
                </label>
                <TagsInput
                  value={mainRegion}
                  onChange={setMainRegion}
                  name="main region"
                  placeHolder="enter main regions"
                />
                <em>press enter to add regions</em>
              </div>
            </div>

            <div className=" flex gap-7 sm:col-span-2">
              {/* MAIN INGRIDIENT DIV */}
              <div className="w-1/2">
                {" "}
                <label
                  for="mainIngridents"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  Main Ingrideints
                </label>
                <TagsInput
                  value={mainIngredients}
                  onChange={setMainIngredients}
                  name="main ingredients"
                  placeHolder="enter main ingredients"
                />
                <em>press enter to add main ingrideints</em>
              </div>
              <div className="w-1/2">
                <label
                  for="allIngridents"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  All Ingrideints
                </label>
                <TagsInput
                  value={allIngredients}
                  onChange={setAllIngredients}
                  name="all ingrideints"
                  placeHolder="enter All Ingrideints"
                />
                <em>press enter to add all ingrideints</em>
              </div>
            </div>

            {/* STEPS */}

            <div className="sm:col-span-2">
              <div className="container">
                <h1 className="block text-lg font-medium text-gray-800 mb-1">
                  Add Steps for Recipe
                </h1>
                <div className="flex mb-4">
                  <input
                    type="text"
                    placeholder="Enter recipe step"
                    value={currentStep}
                    onChange={(e) => setCurrentStep(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-md focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddStep}
                    className="ml-2 p-2 bg-blue-500 text-white rounded-md"
                  >
                    Add Step
                  </button>
                </div>
                <ul className="list-disc pl-5 mb-4">
                  {steps.map((step, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center mb-2"
                    >
                      {editIndex === index ? (
                        <>
                          <input
                            type="text"
                            value={editedStep}
                            onChange={(e) => setEditedStep(e.target.value)}
                            className="flex-grow p-2 border border-gray-300 rounded-md focus:border-indigo-500"
                          />
                          <button
                            type="button"
                            onClick={handleUpdateStep}
                            className="ml-2 p-2 bg-green-500 text-white rounded-md"
                          >
                            Save
                          </button>
                        </>
                      ) : (
                        <>
                          {step}
                          <div className="flex w-44">
                            <button
                              type="button"
                              onClick={() => handleEditStep(index)}
                              className="ml-4 p-1 bg-blue-500 text-white rounded-md w-24"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => handleRemoveStep(index)}
                              className="ml-4 p-1 bg-red-500 text-white rounded-md w-24"
                            >
                              Remove
                            </button>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className=" mx-10 mt-10  bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditRecipePage;
