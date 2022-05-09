import React, {  useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProducDetails';
import useProduct from '../../hooks/useProduct';
import './Inventory.css'
const Inventory = () => {
    // const [addProduct, setAddProduct] =useState([]);
    const {productId} = useParams();
    const [product] = useProductDetails(productId);
    console.log(productId);
    // const [addproduct, setAddProduct] = useState('');

    const [products, setProducts] = useProduct({});

    const singleProduct = products.filter(pd => pd._id === productId)
    const checkValue = singleProduct[0];
    console.log(checkValue);
    // const [name, quantity, price, image] =singleProduct[0];

    // const [increase, setIncrease] = useState('');
    // const [decrease, setDecrease] = useState('');
    return (
        <div className='mt-5 pt-5'>
         
            {/* <d1>{singleProduct.priceiv className=' cart d-flex justify-content-between align-items-center '>
                <div>
                    <h6>{name}</h6>
                    <h6>quantity:{decrease(quantity)}</h6>
                    <h6>price:{price}</h6>
                </div>
                <div>
                    <button className='m-1' onClick={ () => setDecrease (quantity.value - 1)}>increase</button>
                    <button className='m-1' onClick={() => setDecrease(quantity.value + 1) }>Decrease</button>
                </div> */}
            </div>
        // </div>
    );
};

export default Inventory;

