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
      <div>
        <h1>Create Recipe</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              for="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Recipe Title
            </label>
            <input
              type="text"
              name="title"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              required=""
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type Description"
              required=""
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="coverimg"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Cover Image
            </label>
            <input
              type="text"
              name="coverimg"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Cover Image"
              required=""
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="isveg"
              className="block mb-2 text-sm font-medium text-gray-900 "
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
          <div className="sm:col-span-2">
            <label
              for="cuisine"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Cuisine
            </label>
            <input
              type="text"
              name="cuisine"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type the cuisine"
              required=""
              onChange={(e) => setCuisine(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="course"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Course
            </label>
            <input
              type="text"
              name="course"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type the Course"
              required=""
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="mainIngridents"
              className="block mb-2 text-sm font-medium text-gray-900 "
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
            {/* <InputTages /> */}
          </div>
          <div className="sm:col-span-2">
            <label
              for="allIngridents"
              className="block mb-2 text-sm font-medium text-gray-900 "
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
          <div className="sm:col-span-2">
            <label
              for="serving"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              serving
            </label>
            <input
              type="text"
              name="serving"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type All Ingrideints"
              required=""
              value={serving}
              onChange={(e) => setServing(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <div className="container mx-auto p-4">
              <h1 className="text-3xl font-bold mb-4">Add Steps for Recipe</h1>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter recipe step"
                  value={currentStep}
                  onChange={(e) => setCurrentStep(e.target.value)}
                  className="flex-grow p-2 border border-gray-300 rounded-md"
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
          <div className="sm:col-span-2">
            <label
              for="mainregion"
              className="block mb-2 text-sm font-medium text-gray-900 "
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
