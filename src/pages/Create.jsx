import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();
  const { data, setdata } = useContext(recipecontext);

  const submitHandler = (recipiedata) => {
    recipiedata.id = nanoid();
    recipiedata.image = recipiedata.URL;
    delete recipiedata.URL;
    recipiedata.ingredients = recipiedata.ingredients.split(',').map(i => i.trim());
    recipiedata.instructions = recipiedata.instructions.split(',').map(i => i.trim());

    const copydata = [...data];
    copydata.push(recipiedata);
    setdata(copydata);
    toast.success('Recipie added successfully');
    reset();
    navigate('/recipies');
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input className="border-b outline-0 p-2 block" {...register('title')} type="text" placeholder="Recipie title" />
      <input className="border-b outline-0 p-2 block" {...register('URL')} type="url" placeholder="Recipie image URL" />
      <textarea className="border-b outline-0 p-2 block" {...register('description')} placeholder="Recipie description" />
      <textarea className="border-b outline-0 p-2 block" {...register('ingredients')} placeholder="Recipie ingredients (comma separated)" />
      <textarea className="border-b outline-0 p-2 block" {...register('instructions')} placeholder="Recipie instructions (comma separated)" />
      <select className="border-b outline-0 p-2 block" {...register('category')}>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
        <option value="dessert">Dessert</option>
      </select>
      <input className="border-b outline-0 p-2 block" {...register('chef')} type="text" placeholder="Chef's Name" />
      <button className="mt-5 block bg-gray-900 px-4 py-2 rounded-2xl">Save Recipe</button>
    </form>
  );
};

export default Create;
