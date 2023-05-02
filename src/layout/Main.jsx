import React from 'react';

import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Navbar/Navbar';
import Header from '../pages/Shared/Header/Header';
import Chef from '../pages/Home/chef/Chef';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Chef></Chef>
        </div>
    );
};

export default Main;