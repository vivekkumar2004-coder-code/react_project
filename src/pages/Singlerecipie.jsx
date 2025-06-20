import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faClock, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { recipecontext } from '../context/RecipeContext';
import { useParams } from 'react-router-dom';

const Singlerecipie = () => {
  const recepiContext = useContext(recipecontext);
  const {data} = recepiContext;
  const params = useParams()
  console.log("singlerecepie",data)
  console.log("parameter",params.id)

  const recepie =data.find(recepie=>params.id ===   recepie.id )

  console.log("recepie",recepie)
  

  const renderList = (items) =>
    items.map((item, idx) => <li key={idx} className="text-sm text-gray-700">{item}</li>);

  return recepie ? 
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <FontAwesomeIcon icon={faArrowLeft} className="text-xl cursor-pointer" />
        <h1 className="font-semibold text-gray-700">Generic information</h1>
        <FontAwesomeIcon icon={faSearchengin} className="text-xl" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-3xl text-black font-semibold">{recepie.title}</h2>
          <div className="flex text-red-400">
            {[...Array(1)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={solidStar} />
            ))}
            {[...Array(4)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={regularStar} />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            {recepie.description}
          </p>
          <div className="flex items-center gap-4 mt-4 text-gray-700">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} />
              <span className="text-sm">1–2 hrs</span>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faUtensils} />
              <span className="text-sm">20 mins</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold">🍽 18 dumplings</span>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3 my-6 md:my-0 flex justify-center">
          <img
            src={recepie.image}
            alt="dim sum"
            className="rounded-full w-72 h-72 object-cover shadow-lg"
          />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 space-y-4">
          <div>
            <h3 className="font-bold text-black mb-1">Ingredients</h3>
            <ul className="list-disc list-inside">{renderList(recepie.ingredients)}</ul>
          </div>
          <div>
            <h3 className="font-bold mb-1 text-black">Stuffing</h3>
            <ul className="list-disc list-inside">{renderList(recepie.instructions)}</ul>
          </div>
         
         
        </div>
      </div>

      {/* Page indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {[1, 2, 3, 4].map((page) => (
          <div
            key={page}
            className={`w-2 h-2 rounded-full ${
              page === 1 ? 'bg-red-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  : "loading... please wait";
};

export default Singlerecipie;

