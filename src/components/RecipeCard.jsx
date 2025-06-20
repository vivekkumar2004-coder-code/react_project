import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const RecipeCard = (props) => {
  const {
    id,
    title,
    image,
    description,
    ingredients,
    instructions,
    category,
    chef,
    
  } = props.recipe;

  return (<>
    <Link to={`/recipies/details/${id}`} className=" duration-100 hover:scale-105 shadow-lg shadow-blue-800  block w-[23vw] rounded mr-3 mb-3 overflow-hidden">
     <img src={image} alt={title} className=" object-cover  w-full h-[20vh] " />
     <h1 className="px-2 mt-2 font-black">{title}</h1>
     <small className="px-2 text-red-500">{chef}</small>
     <p className="px-2 pb-3">{description.slice(0,100)}...<span className="text-blue-500">more</span>
     </p>
     
    </Link>
    <Outlet/>
    </>
  );
};

export default RecipeCard;
