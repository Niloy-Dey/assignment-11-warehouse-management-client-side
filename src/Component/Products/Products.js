import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Product from '../Product/Product'
import './Products.css'
const Products = () => {
    const [products, setProducts] = useProduct({})
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