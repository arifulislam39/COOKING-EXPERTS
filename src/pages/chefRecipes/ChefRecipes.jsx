/*eslint-disable */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleFontLoader from "react-google-font-loader";

const ChefRecipes = () => {
  const [details, setDetails] = useState([]);
  console.log(details);

  const {
    chefPicture,
    bio,
    likes,
    chefName,
    numberOfRecipes,
    yearsOfExperience,
    ingredients1,
    ingredients2,
    ingredients3,
    rating1,
    rating2,
    rating3,
    cookingMethod1,
    cookingMethod2,
    cookingMethod3,
    recipePicture1,
    recipePicture2,
    recipePicture3,
    recipeName1,
    recipeName2,
    recipeName3,
  } = details;

console.log(details);

  const { id } = useParams();

  const data = useLoaderData();

  useEffect(() => {
    const detailsData = data.find((dt) => dt.id == id);

    setDetails(detailsData);
  }, []);

  // show toast

  const notify = () => toast("Favorite recipe!!!");

  //console.log(data)
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Lobster",
            weights: [400, 700],
          },
        ]}
      />

      <div className="lg:ml-56 lg:me-56">
        <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden relative transition duration-200 transform hover:translate-y-10 rounded-3xl hover:shadow-2xl">
          <figure className="">
            <img
              style={{ width: "1000%", height: "30rem" }}
              src={chefPicture}
              alt="Album"
            />
          </figure>
          <div className="card-body bg-slate-300 w-1/2">
            <h2 className="card-title">{chefName}</h2>
            <p>{bio}</p>
            <p>
              <span className="font-bold">Experiences : </span>{" "}
              {yearsOfExperience} years
            </p>
            <p>
              <span className="font-bold">Total Recipes : </span>{" "}
              {numberOfRecipes}
            </p>
            <p>
              <span className="font-bold">Likes : </span> {likes}
            </p>
          </div>
        </div>

        {/* recipes title  */}
        <div className="text-center mt-14 font-bold text-xl">
          <h3>
            Some Recipes Of <br />
            <span className="text-3xl" style={{ fontFamily: "Lobster" }}>
              {chefName}
            </span>
          </h3>
          <ToastContainer />
        </div>

        {/* recipes card */}

        <div className="grid gap-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
          <div className="">
            {/* card 1 */}
            <div className="card w-96 bg-base-100 shadow-xl overflow-hidden relative transition duration-200 transform hover:-translate-y-4 rounded-3xl hover:shadow-2xl">
              <figure>
                <img src={recipePicture1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{recipeName1}</h2>
                <p className="font-bold">Ingredients :</p>
                {ingredients1 &&
                  ingredients1.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                <p>
                  <span className="font-bold">Cooking Method : </span>
                  {cookingMethod1}
                </p>
                <p>
                  <span className="font-bold">Rating : </span>
                  {rating1}
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="bg-indigo-500 rounded-lg p-3 w-full text-white mt-3"
                    onClick={() => {
                      notify();
                      event.target.disabled = true;
                    }}
                  >
                    Add To Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div>
            <div className="card w-96 bg-base-100 shadow-xl overflow-hidden relative transition duration-200 transform hover:-translate-y-4 rounded-3xl hover:shadow-2xl">
              <figure>
                <img src={recipePicture2} alt="Shoes" />
              </figure>
              <div className="card-body w-full">
                <h2 className="card-title">{recipeName2}</h2>
                <p className="font-bold">Ingredients :</p>
                {ingredients2 &&
                  ingredients2.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                <p>
                  <span className="font-bold">Cooking Method : </span>
                  {cookingMethod2}
                </p>
                <p>
                  <span className="font-bold">Rating : </span>
                  {rating2}
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      notify();
                      event.target.disabled = true;
                    }}
                    className="bg-indigo-500 rounded-lg p-3 w-full text-white mt-3"
                  >
                    Add To Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div>
            <div className="card w-96 bg-base-100 shadow-xl overflow-hidden relative transition duration-200 transform hover:-translate-y-4 rounded-3xl hover:shadow-2xl">
              <figure>
                <img src={recipePicture3} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{recipeName3}</h2>
                <p className="font-bold">Ingredients :</p>
                {ingredients3 &&
                  ingredients3.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                <p>
                  <span className="font-bold">Cooking Method : </span>
                  {cookingMethod3}
                </p>
                <p>
                  <span className="font-bold">Rating : </span>
                  {rating3}
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      notify();
                      event.target.disabled = true;
                    }}
                    className="bg-indigo-500 rounded-lg p-3 w-full text-white mt-3"
                  >
                    Add To Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefRecipes;
