import React from 'react';

import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Navbar/Navbar';
import Header from '../pages/Shared/Header/Header';
import Chef from '../pages/Home/chef/Chef';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Chef></Chef>
            <Footer></Footer>
        </div>
    );
};

export default Main;