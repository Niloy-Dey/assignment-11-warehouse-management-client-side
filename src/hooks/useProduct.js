import { useEffect, useState } from "react";

const useProduct = () =>{

    const [products, setProducts] = useState([]);
// console.log(products);
    useEffect(()=>{
        fetch('https://serene-meadow-33947.herokuapp.com/products')
        .then(res => res.json())
        .then(data =>setProducts(data));
    } , [])


    return [products, setProducts];
}
export default useProduct;