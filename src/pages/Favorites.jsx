import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("fav")) || [];
    setFavorite(stored);
  }, []);

  const renderrecepie = favorite.map((recepie) => (
    <RecipeCard key={recepie.id} recipe={recepie} />
  ));

  return (
    <div className="flex flex-wrap">
      {favorite.length > 0 ? renderrecepie : "No favorites yet"}
    </div>
  );
};

export default Favorites;
