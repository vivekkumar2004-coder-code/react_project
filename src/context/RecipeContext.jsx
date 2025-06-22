import React, { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'


export const recipecontext = createContext(null)


const RecipeContext = (props) => {
  const [data, setdata] = useState([]);
  useEffect(()=>{
    setdata(JSON.parse(localStorage.getItem('recipies')) || [])
  },[])
  console.log(data)
  return <recipecontext.Provider value={{ data, setdata }}>
    {props.children}
  </recipecontext.Provider>
}

export default RecipeContext
