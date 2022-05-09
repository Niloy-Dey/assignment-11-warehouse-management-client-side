import React, {  useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProducDetails';
import useProduct from '../../hooks/useProduct';
import './Inventory.css'
const Inventory = () => {
    // const [addProduct, setAddProduct] =useState([]);
    const {productId} = useParams();
    const [product] = useProductDetails(productId);
    const [products] = useProduct({});
    const singleProduct = products.find(pd => pd._id === productId)
    
    
    const {name,  price, image, description} =singleProduct || {};

    const value = parseInt(price);
console.log(typeof(value));
    const [totalPrice, setTotalPrice] =useState();
    const [newQuantity, setNewQuantity] = useState(1);
    // setTotalPrice(value);
    const handleIncrease = (event ) =>{ 
            // const value = parseFloat(price);
            // setTotalPrice(price);
            const increase = newQuantity + 1;
            setNewQuantity(increase);
            const calculatePrice = parseFloat(price) * increase;
            setTotalPrice(calculatePrice);
            console.log(increase);
    }
    const handleDecrease = (event) =>{
            const decrease = newQuantity - 1;
            setNewQuantity(decrease); 
            const calculatePrice = parseFloat(price) * decrease;
            setTotalPrice(calculatePrice); 
            console.log(decrease);   
    }
    

   
    return (
       <div className='m-5 pt-5 d-flex justify-space-between'>
            <div className=' pt-4 m-4 cart-style d-flex justify-content-between align-items-center '>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className=''>
                    <h4>{name}</h4>
                    <h5>Price: {price}</h5>
                    <h6>Description: {description}</h6>
                    <button className=' btn btn-success' onClick={handleIncrease}>increase</button>
                    <button className='m-1 btn btn-warning' onClick={handleDecrease}>Decrease</button>
                </div> 
            </div>
            <div className=' mt-4 order-style d-flex justify-content-center align-items-center'>
                    <div>
                    <h4>Price: {price} </h4>
                    <h4>Quantity: {newQuantity} </h4>
                    { 
                        totalPrice  ? <h4>Total Price: { totalPrice} </h4> : <div> </div>
                    }
                    

                    <button className='btn btn-primary'>Order</button>
                    </div>
            </div>
       </div>
    );
};

export default Inventory;

