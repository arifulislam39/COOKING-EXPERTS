import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://delicious-dish-server-arifulislam39.vercel.app/food")
      .then((res) => res.json())
      .then((data) => setFood(data));
    setLoading(false);
  }, []);

  // loader or spinner

  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56 ml-56 me-56 mt-10 mb-10 bg-red-500"></progress>
        ;
      </div>
    );
  }

  return (
    <div className="lg:ml-56 lg:me-56 text-center mt-20 mb-16">
      <h2 className="font-bold text-3xl mb-3">Gallery</h2>
      <p>Tasty & Delicious Food Gallery</p>
      <div className="grid gap-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 ">
        {food.map((item) => (
          <div
            className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded-3xl shadow-lg hover:shadow-2xl "
            key={item.id}
          >
            <img
              src={item.picture}
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />

            <div className="bg-black pt-36 bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 ">
              <p className="font-bold text-2xl">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* <div className="card w-96 bg-base-100 shadow-xl h-full" key={item.id}>
                    <figure className="">
                      <img src={item.picture} alt="" className="rounded-xl w-full " />
                    </figure>
                    <div className="card-body self-center items-center text-center opacity-0 hover:opacity-100 bg-opacity-70">
                      <h2 className="card-title  font-bold text-red-500">{item.name}</h2>
                      
                    </div>
                  </div> */
}

export default Gallery;
