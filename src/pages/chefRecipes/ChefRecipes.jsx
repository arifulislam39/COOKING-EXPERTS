/*eslint-disable */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipes = () => {
  const [details, setDetails] = useState([]);
  console.log(details);

  const { id } = useParams();

  const data = useLoaderData();

  useEffect(() => {
    const detailsData = data.find((dt) => dt.id == id);

    setDetails(detailsData);
  }, []);

  const notify =()=>toast('Favorite recipe!!!');

  //console.log(data)
  return (
    <div className="ml-56 me-56">
      <div className="flex bg-slate-300">
        <img
          src={details.chefPicture}
          style={{ width: "50%", height: "30rem" }}
          alt=""
        />
        <div>
          <h1 className="font-bold">{details.chefName}</h1>
          <p>{details.bio}</p>
          <p>Experiences : {details.yearsOfExperience} years</p>
          <p>Total Recipes : {details.numberOfRecipes}</p>
          <p>Likes : {details.likes}</p>
        </div>
      </div>

      <div>
        <h3>here is some recipes</h3>
      </div>
      <div className="flex gap-10 mt-6">
        <div className="text-left border-2 w-96 rounded-md p-6">
          <img src={details.recipePicture1} alt="" />
          <p>{details.recipeName1}</p>
          <p>Ingredients:{details.ingredients1}</p>
          <p>Cooking Method:{details.cookingMethod1}</p>
          <p>Rating : {details.rating1}</p>

          <button onClick={()=>{notify();
          event.target.disabled = true;}
        } className="bg-indigo-500 rounded-lg p-3 w-full text-white mt-3">
            Favorite Item
          </button>
        </div>
        <div className="text-left border-2 w-96 rounded-md p-6">
          <img src={details.recipePicture2} alt="" />
          <p>{details.recipeName2}</p>
          <p>Ingredients:{details.ingredients2}</p>
          <p>Cooking Method:{details.cookingMethod2}</p>
          <p>Rating : {details.rating2}</p>

          <button onClick={()=>{notify();
          event.target.disabled =true;}
        } className="bg-indigo-500 rounded-lg p-3 w-full text-white mt-3">
            Favorite Item
          </button>
        </div>
        <div className="text-left border-2 w-96 rounded-md p-6">
          <img src={details.recipePicture3} alt="" />
          <p>{details.recipeName3}</p>
          <p>Ingredients:{details.ingredients3}</p>
          <p>Cooking Method:{details.cookingMethod3}</p>

          <p>Rating : {details.rating3}</p>

          <button onClick={()=>{notify();
          event.target.disabled = true;}
        } className="bg-indigo-500 rounded-lg p-3 w-full text-white mt-3">
            Favorite Item
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ChefRecipes;
