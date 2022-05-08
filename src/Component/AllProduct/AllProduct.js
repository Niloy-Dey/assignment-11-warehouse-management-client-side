import React, { useEffect, useState } from 'react';
import SeeProduct from '../SeeProduct/SeeProduct';
import './AllProduct.css'
const AllProduct = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data =>setProducts(data))
    } ,[])
    return (
        <div className='all-product mx-5 mt-5 pt-5'>
           {
              products.map(product => <SeeProduct product={product}></SeeProduct>)
           }
        </div>
    );
};

export default AllProduct;