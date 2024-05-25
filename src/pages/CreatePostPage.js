import React, { useContext, useState } from "react";
import AuthContext from "../Context";
import { useNavigate } from "react-router-dom";

const CreatePostPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("isAuth: ", isAuthenticated);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [steps, setSteps] = useState([]);
  const [mainIngridents, setMainIngridents] = useState([]);
  const [allIngridents, setAllIngridents] = useState([]);
  const [mainRegion, setMainRegion] = useState([]);
  const [isVeg, setIsVeg] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [course, setCourse] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("title: ", title);
    console.log("description: ", description);
    console.log("image: ", image);
    console.log("isveg: ", isVeg);
    console.log("steps: ", steps);
    console.log("mainIngridents:", mainIngridents);
    console.log("allIngridents: ", allIngridents);
    console.log("mainRegion: ", mainRegion);
    console.log("cuisine: ", cuisine);
    console.log("course: ", course);
  };
  if (isAuthenticated) {
    return <div>Hi</div>;
  } else {
    navigate("/login");
  }
  // return (
  //   {isAuthenticated ? (<div>hi</div>) : (<div>Log in first</div>)}
  //   // <div>
  //   //   <div>
  //   //     <h1>Create Recipe</h1>
  //   //   </div>
  //   //   <form onSubmit={submitHandler}>
  //   //     <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="title"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           Recipe Title
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="title"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Type product name"
  //   //           required=""
  //   //           onChange={(e) => setTitle(e.target.value)}
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="description"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           Description
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="description"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Type Description"
  //   //           required=""
  //   //           onChange={(e) => setDescription(e.target.value)}
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="coverimg"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           Cover Image
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="coverimg"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Cover Image"
  //   //           required=""
  //   //           onChange={(e) => setImage(e.target.value)}
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="isveg"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           Is the dish veg
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="isveg"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="is veg"
  //   //           required=""
  //   //           onChange={(e) => setIsVeg(e.target.value)}
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="cuisine"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           Cuisine
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="cuisine"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Type the cuisine"
  //   //           required=""
  //   //           onChange={(e) => setCuisine(e.target.value)}
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="course"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           Course
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="course"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Type the Course"
  //   //           required=""
  //   //           onChange={(e) => setCourse(e.target.value)}
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="mainIngridents"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           Main Ingrideints
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="mainIngridents"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Type Main Ingrideints"
  //   //           required=""
  //   //           onChange={(e) => setMainIngridents(e.target.value)}
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="allIngridents"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           All Ingrideints
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="allIngridents"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Type All Ingrideints"
  //   //           required=""
  //   //           onChange={(e) => setAllIngridents(e.target.value)}
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="serving"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           serving
  //   //         </label>
  //   //         <input
  //   //           type="number"
  //   //           name="serving"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Type All Ingrideints"
  //   //           required=""
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="step1 "
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           Step 1
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="step2"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Type All Ingrideints"
  //   //           required=""
  //   //           onChange={(e) => setSteps(e.target.value)}
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="step2"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           Step 2
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="step2"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Type All Ingrideints"
  //   //           required=""
  //   //           onChange={(e) => setSteps(e.target.value)}
  //   //         />
  //   //       </div>
  //   //       <div className="sm:col-span-2">
  //   //         <label
  //   //           for="mainregion"
  //   //           className="block mb-2 text-sm font-medium text-gray-900 "
  //   //         >
  //   //           Main Regoin
  //   //         </label>
  //   //         <input
  //   //           type="text"
  //   //           name="mainregion"
  //   //           id="name"
  //   //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  //   //           placeholder="Type All Ingrideints"
  //   //           required=""
  //   //           onChange={(e) => setMainRegion(e.target.value)}
  //   //         />
  //   //       </div>
  //   //     </div>
  //   //     <button type="submit">Submit</button>
  //   //   </form>
  //   // </div>
  // );
};

export default CreatePostPage;
