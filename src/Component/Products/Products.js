import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import AllProduct from '../AllProduct/AllProduct';
import Product from '../Product/Product'
import './Products.css'
const Products = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    } ,[])

    const someProduct = products.slice(1, 7);
    // console.log(someProduct);

    return (
        <div>
            <div className='all-product m-5'>
            {
                someProduct.map(product=> <Product product={product}></Product>)
            }
        </div>
        <div className='text-center'>
           <Link to={`/allProduct`}> <button className="btn btn-primary">See More Product</button> </Link>
        </div>
        </div>
    );
};

export default Products;