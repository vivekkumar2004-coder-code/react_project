import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipies = () => {
  const {data} = useContext(recipecontext);
  console.log("recepies context", data);

  const renderrecepie = data.map((recepie) => <div key={recepie.id}><h1>{recepie.title}</h1></div>);
  return <div>
    {renderrecepie}
  </div>;
};

export default Recipies;
