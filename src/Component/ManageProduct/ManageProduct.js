import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import './ManageProduct.css'
const ManageProduct = () => {
    const [products , setProducts] = useProduct([]);
    

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure delete this item ?');
        if(proceed) {
            const url = `https://serene-meadow-33947.herokuapp.com/products/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => { 
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                } );
        }
    }
    

    return (
        <div className='text-center'>
            <div className='w-50 mx-auto ps-5 mt-5 pt-5'>
            <h1 className='text-success mb-3 ms-5 ps-3'><u>Manage Products</u></h1>
            {
                products.map(product => 
                <div className='card-style ' key={product.id}> 
                        <div className='d-flex justify-content-between'><h5>{product.name} </h5><h5><button onClick={() => handleDelete(product._id)} className="delete-button"> Delete </button></h5></div>
                </div>)
            }
        </div>

        <div className='text-center  '>
            <Link to={`/addProduct`}> <button className="btn btn-primary">Add New Item</button> </Link>
        </div>
        <div className='text-center'>
           
        </div>
        </div>
    );

};
export default ManageProduct;