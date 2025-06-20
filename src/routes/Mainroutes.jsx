import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'  
import Recipies from '../pages/Recipies'
import Create from '../pages/Create'
const Mainroutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/recipies" element={<Recipies/>}/>
    <Route path="/create-recepies" element={<Create/>}/>

  </Routes>
  )
}

export default Mainroutes
