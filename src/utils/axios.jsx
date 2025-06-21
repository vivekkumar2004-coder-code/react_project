import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    console.log("Request made with ", config);
  return config;
  }, 
  function (error) {
    console.error("Error in request: ", error);
  return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log("Response received: ", response);
    return response;
  },
  function (error) {
    console.error("Error in response: ", error);
     return Promise.reject(error);
  });


export default instance;