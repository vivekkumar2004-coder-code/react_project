import React, { useContext,useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faArrowLeft,
  faClock,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as regularStar,
  faBookmark as regularBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { recipecontext } from "../context/RecipeContext";
import { useParams, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singlerecipie = () => {
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const navigate = useNavigate();

  const recepie = data.find((recepie) => params.id === recepie.id);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: recepie
      ? {
          title: recepie.title,
          description: recepie.description,
          URL: recepie.image,
          ingredients: Array.isArray(recepie.ingredients)
            ? recepie.ingredients.join(", ")
            : recepie.ingredients,
          instructions: Array.isArray(recepie.instructions)
            ? recepie.instructions.join(", ")
            : recepie.instructions,
          category: recepie.category,
          chef: recepie.chef,
        }
      : {},
  });

  const updateHandler = (recipiedata) => {
    recipiedata.image = recipiedata.URL;
    delete recipiedata.URL;
    recipiedata.ingredients = recipiedata.ingredients
      .split(",")
      .map((item) => item.trim());
    recipiedata.instructions = recipiedata.instructions
      .split(",")
      .map((item) => item.trim());

    const index = data.findIndex((r) => r.id === params.id);
    const copy = [...data];
    copy[index] = { ...copy[index], ...recipiedata };
    setdata(copy);
    localStorage.setItem("recipies", JSON.stringify(copy));
    toast.success("Recipe updated successfully");
  };

  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const addFavorite = (e) => {
    
    let copyData = [...favorite];
    copyData.push(recepie);
    setfavorite(copyData);
    localStorage.setItem("fav", JSON.stringify(copyData));
    toast.success("Recipe added to favorites");
  };

  const unFavorite = (e) => {
    const filtered = favorite.filter((r) => r.id !== recepie.id);
    setfavorite(filtered);
    localStorage.setItem("fav", JSON.stringify(filtered));
    toast.success("Recipe removed from favorites");
  };

  const deleteHandler = () => {
    const filtered = data.filter((r) => r.id !== params.id);
    setdata(filtered);
    toast.success("Recipe deleted successfully");
    navigate("/recipies");
    localStorage.setItem("recipies", JSON.stringify(filtered));

    const filteredfav = favorite.filter((r)=>r.id !== params.id)
    setfavorite(filteredfav);
    localStorage.setItem("fav",JSON.stringify(filteredfav));
    
  };

  useEffect(() => {
    console.log("Single Recipe component mounted");
    return () => {
      console.log("Single Recipe component unmounted");
    };
  }, []);

  

  const renderList = (items) => {
    if (!Array.isArray(items)) {
      try {
        items = items.split(",").map((i) => i.trim());
      } catch (e) {
        return <li className="text-sm text-red-500">Invalid data</li>;
      }
    }
    return items.map((item, idx) => (
      <li key={idx} className="text-sm text-gray-700">
        {item}
      </li>
    ));
  };

  return recepie ? (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-xl text-black cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="font-semibold text-gray-700">Generic information</h1>
        <div>
          {favorite.find((f) => {
            return f.id === recepie?.id;
          }) ? (
            <FontAwesomeIcon
              onClick={unFavorite}
              icon={faBookmark}
              className="cursor-pointer absolute right-[8rem] text-xl text-black "
            />
          ) : (
            <FontAwesomeIcon
              onClick={addFavorite}
              icon={regularBookmark}
              className="absolute cursor-pointer right-[8rem] text-xl text-black "
            />
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-3xl text-black font-semibold">{recepie.title}</h2>
          <div className="flex text-red-400">
            {[...Array(1)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={solidStar} />
            ))}
            {[...Array(4)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={regularStar} />
            ))}
          </div>
          <p className="text-gray-600 font-bold text-2xl">{recepie.chef}</p>
          <p className="text-sm text-gray-600">{recepie.description}</p>
          <div className="flex items-center gap-4 mt-4 text-gray-700">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} />
              <span className="text-sm">1–2 hrs</span>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faUtensils} />
              <span className="text-sm">20 mins</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold">🍽 18 dumplings</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 my-6 md:my-0 flex justify-center">
          <img
            src={recepie.image}
            alt="Recipe"
            className="rounded-full w-72 h-72 object-cover shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/3 space-y-4">
          <div>
            <h3 className="font-bold text-black mb-1">Ingredients</h3>
            <ul className="list-disc list-inside">
              {renderList(recepie.ingredients)}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-1 text-black">Stuffing</h3>
            <ul className="list-disc list-inside">
              {renderList(recepie.instructions)}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {[1, 2, 3, 4].map((page) => (
          <div
            key={page}
            className={`w-2 h-2 rounded-full ${
              page === 1 ? "bg-red-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="edit-form bg-gray-800 text-white flex justify-center items-center p-6 mt-8 rounded-lg w-[100%]">
        <form>
          <input
            className="border-b outline-0 p-2 block"
            {...register("title")}
            type="text"
            placeholder="Recipe title"
          />
          <input
            className="border-b outline-0 p-2 block"
            {...register("URL")}
            type="url"
            placeholder="Recipe image URL"
          />
          <textarea
            className="border-b outline-0 p-2 block"
            {...register("description")}
            placeholder="Recipe description"
          />
          <textarea
            className="border-b outline-0 p-2 block"
            {...register("ingredients")}
            placeholder="Recipe ingredients (comma separated)"
          />
          <textarea
            className="border-b outline-0 p-2 block"
            {...register("instructions")}
            placeholder="Recipe instructions (comma separated)"
          />
          <select
            className="border-b outline-0 p-2 block"
            {...register("category")}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="dessert">Dessert</option>
          </select>
          <input
            className="border-b outline-0 p-2 block"
            {...register("chef")}
            type="text"
            placeholder="Chef's Name"
          />
          <button
            onClick={handleSubmit(updateHandler)}
            className="mt-5 block bg-blue-900 px-4 py-2 rounded-2xl"
          >
            Update Recipe
          </button>
          <button
            onClick={deleteHandler}
            className="mt-5 block bg-red-800 px-4 py-2 rounded-2xl"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    "Loading... please wait"
  );
};

export default Singlerecipie;
