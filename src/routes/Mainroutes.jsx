import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipies from "../pages/Recipies";
import Create from "../pages/Create";
import Singlerecipie from "../pages/Singlerecipie";
import PageNotFound from "../pages/PageNotFound";
import Favorites from "../pages/Favorites";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipies" element={<Recipies />} />
      <Route path="/recipies/details/:id" element={<Singlerecipie />} />
      <Route path="/create-recepies" element={<Create />} />

      <Route path="*" element={<PageNotFound />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>

  );
};

export default Mainroutes;
