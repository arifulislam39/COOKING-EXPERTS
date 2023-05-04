import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [food, setFood]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://delicious-dish-server-arifulislam39.vercel.app/food")
        .then(res=>res.json())
        .then(data=>setFood(data));
        setLoading(false)
    }, []);

    // loader or spinner

    if (loading) {
      return <div className="text-center"><progress className="progress w-56 ml-56 me-56 mt-10 mb-10 bg-red-500"></progress>;</div>
    }


    return (
        <div className="ml-56 me-56 text-center mt-20 mb-16">
            <h2 className='font-bold text-3xl mb-3'>Gallery</h2>
            <p>Tasty & Delicious Food Gallery</p>
            <div className="grid gap-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 ">
                {
                    food.map(item=><div className="card w-96 shadow-xl bg-slate-600" key={item.id}>
                    <figure className="px-10 pt-10">
                      <img src={item.picture} alt="" className="rounded-xl w-full h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-white font-bold">{item.name}</h2>
                      
                    </div>
                  </div>)
                }

            </div>
            
        </div>
    );
};

export default Gallery;