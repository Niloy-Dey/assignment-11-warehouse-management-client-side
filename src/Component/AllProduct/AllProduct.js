import useProduct from '../../hooks/useProduct';
import SeeProduct from '../SeeProduct/SeeProduct';
import './AllProduct.css'
const AllProduct = () => {
    const [products ] = useProduct({});
    return (
        <div className='all-product mx-5 mt-5 pt-5'>
           {
              products.map(product => <SeeProduct product={product}></SeeProduct>)
           }
        </div>
    );
};

export default AllProduct;