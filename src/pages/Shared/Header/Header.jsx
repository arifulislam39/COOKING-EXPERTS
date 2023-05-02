import React from 'react';
import banner from '../../../assets/banner.jpg'

const Header = () => {
    return (
        <div>
            <img src={banner} alt=""  style={{width:'100%', height:"40rem" }}/>
        </div>
    );
};

export default Header;