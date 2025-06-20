import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipies = () => {
  const { data } = useContext(recipecontext);
  console.log("recepies context", data);

  const renderrecepie = data.map((recepie) => (
   <RecipeCard key={recepie.id} recipe={recepie}/>
  ));
  return <div className="flex flex-wrap">{renderrecepie}</div>;
};

export default Recipies;
