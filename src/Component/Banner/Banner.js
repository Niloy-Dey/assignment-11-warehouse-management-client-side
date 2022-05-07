import React from 'react';
import { Carousel } from 'react-bootstrap';
import  imageOne  from '../../asset/Image/image-1.jpg';
import imageTwo from  '../../asset/Image/images-2.jpg';
import imageThree from  '../../asset/Image/image-3.jpg';
import banner from '../../asset/Image/banner.png'
const Banner = () => {
    return (
        <div>
            <div className='text-center  d-flex align-items-center justify-content-center'>
            <div><h1 className='text-warning fw-bolder'>Welcome Refrigerator world </h1></div>
            <div className=''><img src={banner} className="" alt="" />  <button className='btn-primary '>Book Now </button></div>
            <div><h1 className='text-success fw-bolder'>Special Offer !!!! and Discount</h1></div>
        </div>
        </div>
    );
};

export default Banner;