import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'



export const recipecontext = createContext(null)


const RecipeContext = (props) => {
  const [data, setdata] = useState([])
  console.log(data)
  return <recipecontext.Provider value={{ data, setdata }}>
    {props.children}
  </recipecontext.Provider>
}

export default RecipeContext
