import React from 'react';
import { Card } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({product}) => {
    const {_id, name, price, image, description} = product;


    const navigate = useNavigate();
    const navigateToInventory = (id) =>{
         navigate(`/inventory/${id}`)
    }
    return (
        <div className='single-product'>
            <Card style={{  }}>
            <Card.Img variant="top" className='image-style' src={image} />
            <Card.Body>
                <Card.Title> {name} </Card.Title>
                <h5>price: {price} </h5>
                <Card.Text> {description} </Card.Text>
                <div className='text-center '><button onClick={() => navigateToInventory(_id)} className='btn btn-warning fw-bolder'>BOOK NOW</button></div>
            </Card.Body>
            </Card>        
        </div>
    );
};

export default Product;