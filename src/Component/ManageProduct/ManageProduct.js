import React from 'react';
import useProduct from '../../hooks/useProduct';

const ManageProduct = () => {
    const [products , setProducts] = useProduct([]);
    

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure delete this item ?');
        if(proceed) {
            const url = `http://localhost:5000/products/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => { 
                    console.log('deleted' , data)
                    const remaining = products.filter(product => product._Id !== id);
                    setProducts(remaining);
                } );
        }
    }
    

    return (
        <div>
            <div className='w-50 mx-auto mt-5 pt-5'>
            <h1>Manage Products</h1>
            {
                products.map(product => 
                <div key={product.id}> 
                        <h5>{product.name} <button onClick={() => handleDelete(product._Id)}> X </button></h5>
                </div>)
            }
        </div>
        </div>
    );

};
export default ManageProduct;