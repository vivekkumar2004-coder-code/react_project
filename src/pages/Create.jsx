import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { register,reset, handleSubmit, formState } = useForm();
   const {data , setdata} = useContext(recipecontext)
  const submitHandler = (recipiedata)=>{
    recipiedata.id = nanoid();
    console.log(recipiedata)
     const copydata = [...data]
  copydata.push(recipiedata)
  setdata(copydata)
  toast.success("Recipie added successfully")
  reset()
  navigate("/recipies")
  }

 

 

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className="border-b outline-0 p-2 block"
        {...register("title")}
        type="text"
        placeholder="Recipie title"
      />
      <small className="text-red-400">Error is there </small>
      <input
        className="border-b outline-0 p-2 block"
        {...register("URL")}
        type="url"
        placeholder="Recipie image URL"
      />
      <small className="text-red-400">Error is there </small>

      <textarea
        className="border-b outline-0 p-2 block"
        {...register("description" )}
        placeholder="Recipie description"
      ></textarea>
      <small className="text-red-400">Error is there </small>
      <textarea
        className="border-b outline-0 p-2 block"
        {...register("ingredients")}
        placeholder="Recipie ingredients"
      ></textarea>
      <small className="text-red-400">Error is there </small>
      <textarea
        className="border-b outline-0 p-2 block"
        {...register("instructions")}
        placeholder="Recipie instructions"
      ></textarea>
      <small className="text-red-400">Error is there </small>

         <select
        className="border-b outline-0 p-2 block "
        {...register("category")}
        placeholder="Recipie instructions"
      >
        <option className="text-black" value="breakfast">Breakfast</option>
        <option className="text-black" value="lunch">Lunch</option>
        <option className="text-black" value="dinner">Dinner</option>
        <option className="text-black" value="snack">Snack</option>
        <option className="text-black" value="dessert">Dessert</option>
      </select>
      
        <input
        className="border-b outline-0 p-2 block"
        {...register("Chef's Name")}
        type="text"
        placeholder="Chef's Name"
      />


      <button className="mt-5 block bg-gray-900 px-4 py-2 rounded-2xl">
        Save Recepie
      </button>

    </form>
  );
};

export default Create;
