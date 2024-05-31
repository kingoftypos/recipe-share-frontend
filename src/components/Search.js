import React, { useEffect, useState } from 'react';
import { baseURL } from "../baseURL";
import axios from "axios";

const Search = () => {
    const [result, setResult] = useState([]);
    const [submit, setSubmit] = useState(false);
    const [reset, setReset] = useState(false);
    const [name, setName] = useState();
    const [cuisine, setCuisine] = useState();
    const [diet, setDiet] = useState();

    const fetchData = async (params = {}) => {
        try {
            let res = await axios.get(`${baseURL}/recipe`, { params });
            console.log(res);
            let arr = res.data.recipe.map((ele) => ele._id);
            console.log(arr);
            setResult(arr);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (submit) {
            const params = {};
            if (name) params.title = name;
            if (cuisine) params.cuisine = cuisine;
            if (diet && diet !== "All") params.isVeg = diet;
            fetchData(params);
            setSubmit(false);
        }
    }, [submit, name, cuisine, diet]);

    useEffect(() => {
        if (reset) {
            fetchData();
            setName();
            setCuisine();
            setDiet();
            setReset(false);
        }
    }, [reset]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="m-10 w-screen max-w-screen-md">
            <div className="flex flex-col">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSubmit(true);
                        }}
                    >
                        <div className="relative mb-10 w-full flex items-center justify-between rounded-md">
                            <svg
                                className="absolute left-2 block h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" className=""></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                            </svg>
                            <input
                                type="text"
                                name="search"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="Search by name, type, manufacturer, etc"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <div className="flex flex-col">
                                <label htmlFor="cuisine" className="text-sm font-medium text-stone-600">
                                    Cuisine
                                </label>
                                <input
                                    type="text"
                                    id="cuisine"
                                    value={cuisine}
                                    onChange={(e) => setCuisine(e.target.value)}
                                    placeholder="New-Delhi"
                                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="diet" className="text-sm font-medium text-stone-600">
                                    Diet
                                </label>

                                <select
                                    id="diet"
                                    value={diet}
                                    onChange={(e) => setDiet(e.target.value)}
                                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                >
                                    <option value="">All</option>
                                    <option value="true">Veg</option>
                                    <option value="false">Non-Veg</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                            <button
                                type="button"
                                className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
                                onClick={() => setReset(true)}
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;
