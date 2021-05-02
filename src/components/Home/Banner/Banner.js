import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BannerMain from '../BannerMain/BannerMain';

const Banner = () => {
    return (
        <header className="header">
            <Navbar></Navbar>
            <BannerMain></BannerMain>
        </header>
    );
};

export default Banner;