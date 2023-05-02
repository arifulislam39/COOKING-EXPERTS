/*eslint-disable */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecipes = () => {
  const [details, setDetails] = useState([]);
  console.log(details);

  const { id } = useParams();

  const data = useLoaderData();

  useEffect(() => {
    const detailsData = data.find((dt) => dt.id == id);

    setDetails(detailsData);
  }, []);
  //console.log(data)
  return (
    <div className="ml-56 me-56">
      <div className="flex bg-slate-300">
        <img src={details.chefPicture} style={{width:'50%', height:"30rem"}} alt=""/>
        <div>
          <h1 className="font-bold">{details.chefName}</h1>
          <p>{details.bio}</p>
          <p>Experiences : {details.yearsOfExperience} years</p>
          <p>Total Recipes : {details.numberOfRecipes}</p>
          <p>Likes : {details.likes}</p>
        </div>
      </div>
      <div><h3>here is some recipes</h3></div>
      <div className="flex gap-10 mt-6">
        
        <div className="text-left text-red-400 border-2 w-96 h-96 rounded-md p-6">
            <p>{details.recipeName1}</p>

        </div>
        <div className="text-left text-red-400 border-2 w-96 h-96 rounded-md p-6">
            <p>{details.recipeName2}</p>

        </div>
        <div className="text-left text-red-400 border-2 w-96 h-96 rounded-md p-6">
            <p>{details.recipeName3}</p>

        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
