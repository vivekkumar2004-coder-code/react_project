import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'


export const recipecontext = createContext(null)


const RecipeContext = (props) => {
  const [data, setdata] = useState([
    {
      id:"1",
  title: "Classic Margherita Pizza",
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    description: "A simple and delicious pizza topped with fresh mozzarella, basil, and a drizzle of olive oil.Margherita pizza is a traditional Neapolitan pizza made with simple, fresh ingredients that highlight the flavors of Italy. It’s celebrated not just for its taste, but for its symbolic representation of the Italian flag — green (basil), white (mozzarella), and red (tomatoes). ",
  ingredients: [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste"
  ],
  instructions: [
    "Preheat the oven to 475°F (245°C).",
    "Roll out the pizza dough and spread tomato sauce evenly.",
    "Top with slices of fresh mozzarella and fresh basil leaves.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    "Slice and serve hot."
  ],
  category: "Dinner",
  chef : "Turban Tadka"

  
}
  ])
  console.log(data)
  return <recipecontext.Provider value={{ data, setdata }}>
    {props.children}
  </recipecontext.Provider>
}

export default RecipeContext
