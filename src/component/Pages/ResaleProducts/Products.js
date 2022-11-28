import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../Shared/Modal/Modal';
import MyOrders from '../Dashboard/Buyers/MyOrders/MyOrders';
import Product from './Product';

const Products = () => {
   
    const {products} = useLoaderData([]);

    console.log(products)
    return (
        
     <div className='flex gap-5 grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 my-5 px-5 mx-5'>

{
    products.map(product => <Product key={product.p_id} product={product}></Product>)
}
<div>
{

    products.map(p => <Modal key={p.p_id} p={p}></Modal>)
}
</div>


     </div>

    );
};

export default Products;