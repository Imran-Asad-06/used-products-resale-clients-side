import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Ad from './Ad';

const Advertise = () => {
    const{loading} = useContext(AuthContext);
    // const {advertises} = useLoaderData();
    const[ ads,setAds] = useState();
    useEffect(()=>{
        fetch(' http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setAds(data))
    },
        [])
 
        if(loading){
            return  <div className="text-center">
            <progress className="progress w-56"></progress>
        </div>
              
        
        }

    return (
     <div className='mt-4 '>
        <h3 className='text-4xl font-bold text-center'>Available Products</h3>
        {/* <div className="relative w-full flex gap-4 py-6 overflow-x-auto"> */}
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
      

      {
           ads?.map(ad => <Ad key={ad._id} ad={ad}></Ad>)
      }
  
   </div>
     </div>
    );
};

export default Advertise;