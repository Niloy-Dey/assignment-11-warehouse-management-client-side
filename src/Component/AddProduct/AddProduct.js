import React, { useState } from 'react';
import './AddProduct.css'
const AddProduct = () => {

    const addItem = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const suplier = event.target.suplier.value;
        const details = {name , price, quantity, image, description, suplier};
        // console.log(data);

        const url = `https://serene-meadow-33947.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(details)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (

            <div className='w-50 mx-auto mt-5 pt-5'>
            <h1 className='text-center text-success'>Add Item</h1>
            <form  onSubmit={addItem} className=' from-design w-100 p-3 '>
                <input placeholder='Enter product name' type="text" name="name" id="" />
                <input placeholder='Enter product price' type="text" name="price" id="" />
                <input placeholder='Enter product quantity' type="text" name="quantity" id="" />
                <input placeholder='Enter product image url' type="text" name="image" id="" />
                <input placeholder='Enter product description' type="text" name="description" id="" />
                <input placeholder='Enter product suplier' type="text" name="suplier" id="" />
                <div className='text-center '><input className='btn btn-warning'  type="submit"  value="Add Item" /></div>
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