import React from 'react';
import './AddProduct.css'
const AddProduct = () => {
    return (
        <div className='w-50 mx-auto mt-5 pt-5'>
            <h1 className='text-center text-success'>Add Item</h1>
            <form action="" className='w-100 p-3 '>
                <input placeholder='Enter product name' type="text" name="name" id="" />
                <input placeholder='Enter product price' type="text" name="price" id="" />
                <input placeholder='Enter product quantity' type="text" name="quantity" id="" />
                <input placeholder='Enter product image url' type="text" name="image" id="" />
                <input placeholder='Enter product description' type="text" name="description" id="" />
                <input placeholder='Enter product suplier' type="text" name="suplier" id="" />
                <div className='text-center '><input className='btn btn-warning'  type="button"  value="Add Item" /></div>
            </form>
            
        </div>
    );
};

export default AddProduct;


/* 
name": "walton glass door",
        "image": "https://www.ruchishil.com/public/uploads/products/meta/IaUYVejA9bk8DqW0FYpQO33zaq6yJoETFVivwQIg.jpeg",
        "suplier": "walton group",
        "price": "40000",
        "quantity": "10",
        "description */