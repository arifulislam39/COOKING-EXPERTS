import React, { useEffect, useState } from 'react';
import GoogleFontLoader from "react-google-font-loader";

const FeatureRecipe = () => {
    const [recipes, setRecipes]=useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://delicious-dish-server-arifulislam39.vercel.app/featureRecipe')
        .then(res=>res.json())
        .then(data=> setRecipes(data));
        setLoading(false)
    }, []);
     
    // loader or spinner

    if (loading) {
      return <div className="text-center"><progress className="progress w-56 ml-56 me-56 mt-10 mb-10 bg-red-500"></progress>;</div>
    }

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


        <div className="lg:ml-56 lg:me-56 text-center mt-20">
            <h2 className='font-bold text-4xl mb-3' style={{ fontFamily:'Lobster'}}>Featured Recipes</h2>
            <p>Best Recipes in the Town</p>
            <div className="grid gap-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
                {
                    recipes.map(recipe=>(<div className="card w-96 bg-base-100 shadow-xl border-r-slate-800 overflow-hidden relative transition duration-200 transform hover:-translate-y-4 rounded-3xl hover:shadow-2xl" key={recipe.id}>
                    <figure><img src={recipe.recipe_picture} alt="" className='w-full h-40'/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{recipe.recipe_name}</h2>

                      <p className='text-left'><span className='font-bold'>Ingredients</span> : <br /> {recipe.ingredients}</p>
                      
                      <p className='text-left'><span className='font-bold'>cooking method</span> : <br /> {recipe.cooking_method}</p>
                      <div className="card-actions justify-center">
                        <button className="btn btn-primary bg-indigo-500">Details</button>
                      </div>
                    </div>
                  </div>))
                }
            </div>
            
        </div>
        </>
    );
};

export default FeatureRecipe;