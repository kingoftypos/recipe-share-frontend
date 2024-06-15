import React, { useContext, useState } from "react";
import AuthContext from "../Context";
import { useNavigate } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import axios from "axios";
import { baseURL } from "../baseURL";
import Swal from "sweetalert2";

const CreatePostPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("isAuth: ", isAuthenticated);
  const navigate = useNavigate();

  if (isAuthenticated === false) {
    navigate("/login", { replace: true });
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [mainIngredients, setmainIngredients] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [mainRegion, setMainRegion] = useState([]);
  const [isVeg, setIsVeg] = useState(true);
  const [cuisine, setCuisine] = useState("");
  const [course, setCourse] = useState("");
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState("");
  const [serving, setServing] = useState("");
  const [error, setError] = useState("");

  const handleAddStep = () => {
    if (currentStep.trim() !== "") {
      setSteps([...steps, currentStep.trim()]);
      setCurrentStep("");
    }
  };
  const handleRemoveStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseURL}/recipe`,
        {
          title,
          description,
          coverImg: image,
          mainIngredients,
          allIngredients,
          mainRegion,
          isVeg,
          cuisine,
          course,
          serving,
          steps,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Recipe Created Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      }
      setError(error);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  // if (isAuthenticated) {
  //   return <div>Hi</div>;
  // } else {
  //   navigate("/login");
  // }
  return (
    <div>
      <div className="mx-5 ">
        <h1 className="my-4 text-3xl text-center">Create Recipe</h1>
        <form onSubmit={submitHandler}>
          <div className="grid gap-4 mx-10 sm:grid-cols-2 sm:gap-6 ">
            <div className="  sm:col-span-2 ">
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
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="  sm:col-span-2 ">
              <div class="mb-6">
                <label
                  for="message"
                  class="block text-lg font-medium text-gray-800 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows="5"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="  sm:col-span-2 ">
              <div class="mb-6">
                <label
                  for="title"
                  class="block text-lg font-medium text-gray-700 mb-1"
                >
                  Cover Image
                </label>
                <input
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
                      onChange={(e) => setIsVeg(e.target.value)}
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
                      onChange={(e) => setIsVeg(e.target.value)}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between sm:col-span-2">
              <div className="">
                <label
                  for="cuisine"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  Cuisine
                </label>
                <input
                  type="text"
                  id="cuisine"
                  name="cuisine"
                  className="w px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                  onChange={(e) => setCuisine(e.target.value)}
                />
              </div>
              <div className="">
                <label
                  for="course"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  Course
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  onChange={(e) => setCourse(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  for="serving"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  Serving
                </label>
                <input
                  type="text"
                  id="serving"
                  name="serving"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  onChange={(e) => setServing(e.target.value)}
                  required
                />
              </div>
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
                  name="fruits"
                  placeHolder="enter fruits"
                />
                <em>press enter to add regions</em>
              </div>
            </div>
            <div className=" flex gap-7 sm:col-span-2">
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
                  onChange={setmainIngredients}
                  name="fruits"
                  placeHolder="enter fruits"
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
                  name="fruits"
                  placeHolder="enter fruits"
                />
                <em>press enter to add all ingrideints</em>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="container ">
                <h1 className="block text-lg font-medium text-gray-800 mb-1">
                  Add Steps for Recipe
                </h1>
                <div className="flex mb-4">
                  <input
                    type="text"
                    placeholder="Enter recipe step"
                    value={currentStep}
                    onChange={(e) => setCurrentStep(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-md  focus:border-indigo-500"
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
                      {step}
                      <button
                        type="button"
                        onClick={() => handleRemoveStep(index)}
                        className="ml-4 p-1 bg-red-500 text-white rounded-md"
                      >
                        Remove
                      </button>
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
