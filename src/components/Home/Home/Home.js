import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Prices from '../Prices/Prices';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <About />
            <Prices />
            <Contact />
        </div>
    );
};

export default Home;