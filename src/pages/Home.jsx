import React, { useEffect } from 'react'
import axios from '../utils/axios'
const Home = () => {

const getProduct = async()=>{
  try{
const {data} = await axios.get("/products")
console.log(data)
  }
  catch(error){
    console.log(error)
  }
};

useEffect(()=>{
  console.log("Home component mounted");

  getProduct();
  return ()=>{
    console.log("Home component unmounted");
  }
})

  return (
    <div>
      home
      <button onClick={getProduct}>Get Product</button>
    </div>
  )
}

export default Home
