import React, { useContext, useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";

const RecipesPage = () => {
  let [result, setResult] = useState([]);
  // console.log("result: ", result);

  return (
    <div className="flex flex-col items-center space-y-8">
      <Search setResult={setResult} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {result.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default RecipesPage;
