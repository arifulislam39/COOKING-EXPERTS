/*eslint-disable */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  const [details, setDetails] = useState([]);
  console.log(details);

  const { id } = useParams();

  const data = useLoaderData();

  useEffect(() => {
    const detailsData = data.find((dt) => dt.id == id);

    setDetails(detailsData);
  }, []);

  const notify = () => toast("Favorite recipe!!!");

  //console.log(data)
  return (
    <div className="ml-56 me-56">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="">
          <img
            style={{ width: "1000%", height: "30rem" }}
            src={details.chefPicture}
            alt="Album"
          />
        </figure>
        <div className="card-body bg-slate-300 w-1/2">
          <h2 className="card-title">{details.chefName}</h2>
          <p>{details.bio}</p>
          <p><span className="font-bold">Experiences : </span> {details.yearsOfExperience} years</p>
          <p><span className="font-bold">Total Recipes  : </span> {details.numberOfRecipes}</p>
          <p><span className="font-bold">Likes : </span>  {details.likes}</p>
        </div>
      </div>

      {/* recipes title  */}
      <div className="text-center mt-14 font-bold text-xl">
        <h3>Some Recipes Of <br /><span className="text-3xl">{details.chefName}</span></h3>
        <ToastContainer />
      </div>

      {/* recipes card */}

      <div className="grid gap-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
        <div className="">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={details.recipePicture1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{details.recipeName1}</h2>
              <p><span className="font-bold">Ingredients : </span>{details.ingredients1}</p>
              <p><span className="font-bold">Cooking Method : </span>{details.cookingMethod1}</p>
              <p><span className="font-bold">Rating : </span>{details.rating1}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    notify();
                    event.target.disabled = true;
                  }}
                  className="bg-indigo-500 rounded-lg p-3 w-full text-white mt-3"
                >
                  Favorite Item
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={details.recipePicture2} alt="Shoes" />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">{details.recipeName2}</h2>
              <p><span className="font-bold">Ingredients : </span>{details.ingredients2}</p>
              <p><span className="font-bold">Cooking Method : </span>{details.cookingMethod2}</p>
              <p><span className="font-bold">Rating : </span>{details.rating2}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    notify();
                    event.target.disabled = true;
                  }}
                  className="bg-indigo-500 rounded-lg p-3 w-full text-white mt-3"
                >
                  Favorite Item
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={details.recipePicture3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{details.recipeName3}</h2>
              <p><span className="font-bold">Ingredients : </span>{details.ingredients3}</p>
              <p><span className="font-bold">Cooking Method : </span>{details.cookingMethod1}</p>
              <p><span className="font-bold">Rating : </span>{details.rating3}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    notify();
                    event.target.disabled = true;
                  }}
                  className="bg-indigo-500 rounded-lg p-3 w-full text-white mt-3"
                >
                  Favorite Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
