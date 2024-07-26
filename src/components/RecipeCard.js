import React from "react";

const RecipeCard = ({ children, img, ...props }) => {
  return (
    <div
      {...props}
      className="relative w-72 h-96 overflow-hidden rounded-2xl sha group "
    >
      <img
        src={img}
        className="transition-transform group-hover:scale-110 duration-200 w-72 h-96 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
      <div
        className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent
      "
      >
        <div className="p-4 text-white"> {children} </div>
      </div>
    </div>
  );
};

export default RecipeCard;
