import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProducDetails';


const Inventory = () => {
    const {productId} = useParams();
    const [product] = useProductDetails(productId);
    console.log(product);
    return (
        <div className='mt-5 pt-5'>
            <h1>hello inventory</h1>
            <h1>{product.name} </h1>
        </div>
    );
};

export default Inventory;