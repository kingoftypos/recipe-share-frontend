import React, { useEffect, useState } from 'react';
import { baseURL } from "../baseURL";
import axios from "axios";

const Search = ({ setResult }) => {
    const [name, setName] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [diet, setDiet] = useState(''); 

    const fetchData = async (params = {}) => {
        try {
            let res = await axios.get(`${baseURL}/recipe`, { params });
            console.log(res);
            let arr = res.data.recipe.map((ele) => ele);
           // console.log(arr);
            setResult(arr);
        } catch (error) {
            console.error(error);
        }
    };

    const submit = () => {
        const params = {};
        if (name) params.title = name;
        if (cuisine) params.cuisine = cuisine;
        if (diet && diet !== "All") params.isVeg = diet;
        fetchData(params);
    };

    const reset = () => {
        fetchData();
        setName('');
        setCuisine('');
        setDiet('');
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="m-10 w-full max-w-74-md">
    <div className="flex flex-col ml-16 mr-10" >
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }}
            >
                <div className="flex space-x-4 items-center">
                    <div className="relative flex-1">
                    <label htmlFor="cuisine" className="text-sm font-medium text-stone-600">
                            Search
                        </label>
                        <svg
                            className="absolute left-3 top-2/3 transform -translate-y-1/2 h-5 w-5 text-gray-400"
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
                            className="h-11 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            placeholder="Search by name"
                        />
                    </div>

                    <div className="flex flex-col w-1/8">
                        <label htmlFor="cuisine" className="text-sm font-medium text-stone-600">
                            Cuisine
                        </label>
                        <input
                            type="text"
                            id="cuisine"
                            value={cuisine}
                            onChange={(e) => setCuisine(e.target.value)}
                            placeholder="Delhi"
                            className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div className="flex flex-col w-1/8">
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

                    <button
                        type="button"
                        className="self-end rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
                        onClick={reset}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="self-end rounded-lg bg-blue-600 px-12 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
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
