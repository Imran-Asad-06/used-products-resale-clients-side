import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Modal from '../../Shared/Modal/Modal';

const Product = ({product}) => {
  const {user} = useContext(AuthContext);
  const{pName , resalePrice, pImg ,OriginalPrice , location, Use , seller} = product;
    console.log(product)
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <div className="w-full max-w-sm  rounded-lg  dark:bg-gray-800 dark:border-gray-700  bg-base-100 shadow-xl">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={pImg} alt="product image" />
    </a>
    <div className="px-5 pb-5 mb-4">
        <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">{pName}</h5>
        </a>
        <div  >
            <div>
            <span className="text-xl font-semibold text-blue-500 dark:text-white">Resale Price:{resalePrice}</span>
            <br />
            <p className="  text-gray-900 dark:text-white">Original Price: {OriginalPrice}</p>
            <p className="  text-gray-900 dark:text-white">Location: {location}</p>
            <p className="  text-gray-900 dark:text-white">Years of Use: {Use}</p>
            <p>Seller:{seller}</p>
            </div>
        </div>
        <div className='mt-5'>
   
        <label htmlFor="confirm-modal" className="btn text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Now</label>
        </div>
    </div>
</div>


      </div>
    );
};

export default Product;