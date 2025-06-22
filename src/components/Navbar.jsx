import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
  <div className='flex justify-center items-center text-white text-sm font-thin mb-10 gap-x-10'>
    <NavLink className ={(e)=>e.isActive? "text-red-400":""} to="/">Home</NavLink>
    <NavLink className = {(e)=>e.isActive? "text-red-400":""} to="/about">About</NavLink>
    <NavLink className ={(e)=>e.isActive? "text-red-400":""} to="/recipies">Recipies</NavLink>
    <NavLink className ={(e)=>e.isActive? "text-red-400":""} to="/create-recepies">Create Recipies</NavLink>
    <NavLink className ={(e)=>e.isActive? "text-red-400":""} to="/favorites">Favorites</NavLink>
  </div>
  )
}

export default Navbar
