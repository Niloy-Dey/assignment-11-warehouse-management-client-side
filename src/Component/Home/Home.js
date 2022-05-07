import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center text-primary my-5 '><u>Our Product </u></h1>
            <Products></Products>
            
        </div>
    );
};

export default Home;