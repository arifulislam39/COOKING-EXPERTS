import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Chef = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefInfo")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  return (
    <div>
      <div className="ml-56 me-56 text-center mt-20 ">
        <h1 className="font-bold text-3xl mb-3">Meet The Experts</h1>
        <p>American best chefs list</p>
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 ">
          {chefData.map((chef) => (
            <div
              className="text-left text-white border-2 w-auto h-96 rounded-md p-6 bg-slate-800"
              key={chef.id}
            >
              <img className="w-80 h-40" src={chef.chefPicture} alt="" />
              <h2 className="font-bold mt-5">{chef.chefName}</h2>
              <p>Experiences : {chef.yearsOfExperience} years</p>
              <p>Total Recipes : {chef.numberOfRecipes}</p>
              <p>Likes : {chef.likes} </p>

              <div className="flex gap-6 mt-3">
                <div className="flex items-center">
                  <p>{}</p>
                </div>

                <div className="flex items-center">
                  <img src="" alt="" />
                  <p>{}</p>
                </div>
              </div>

              <Link to={`/chefrecipes/${chef.id}`}>
                <button className="bg-indigo-500 rounded-lg p-3 w-full text-white mt-3">
                  View Recipes
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chef;
