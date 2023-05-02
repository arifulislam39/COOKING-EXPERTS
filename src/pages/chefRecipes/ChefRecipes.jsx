import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {
    const [details, setDetails] = useState([]);
    console.log(details)

    const {id}=useParams();

    const data =useLoaderData();

    useEffect(() => {
        const detailsData = data.find(dt => dt.id == id)

        setDetails(detailsData)
    }, [])
    //console.log(data)
    return (
        <div>
            <h3>chef recipes</h3>
        </div>
    );
};

export default ChefRecipes;