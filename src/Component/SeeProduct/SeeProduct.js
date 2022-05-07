import React from 'react';
import { Card } from 'react-bootstrap';
import './SeeProduct.css'
const SeeProduct = ({product}) => {
     const {name, price, image, description} = product;
    return (
        <div>
             <div className='single-product'>
            <Card style={{  }}>
            <Card.Img variant="top" className='image-style' src={image} />
            <Card.Body>
                <Card.Title> {name} </Card.Title>
                <h5>price: {price} </h5>
                <Card.Text> {description} </Card.Text>
                <div className='text-center '><button className='btn-warning fw-bolder'>BOOK NOW</button></div>
            </Card.Body>
            </Card> 
            </div>
        </div>
    );
};

export default SeeProduct;