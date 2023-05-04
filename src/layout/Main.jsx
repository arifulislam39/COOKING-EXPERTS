import React from 'react';

import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Navbar/Navbar';
import Header from '../pages/Shared/Header/Header';
import Chef from '../pages/Home/chef/Chef';
import FeatureRecipe from '../pages/FeatureRecipe/FeatureRecipe';
import Gallery from '../pages/Gallery/Gallery';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Chef></Chef>
            <FeatureRecipe></FeatureRecipe>
            <Gallery></Gallery>
        </div>
    );
};

export default Main;