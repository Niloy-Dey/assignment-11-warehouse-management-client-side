import React, { useEffect, useState } from 'react';
import SeeProduct from '../SeeProduct/SeeProduct';
import './AllProduct.css'
const AllProduct = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    } ,[])
    return (
        <div className='all-product'>
           {
              products.map(product => <SeeProduct product={product}></SeeProduct>)
           }
        </div>
    );
};

export default AllProduct;