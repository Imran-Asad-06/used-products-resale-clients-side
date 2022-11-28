import React from 'react';

const Ad = ({ad}) => {
    const {pImg,pName,resalePrice} = ad;
    return (
        <div>
         
             {/* <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={pImg} alt="Image 1" />  */}

{/*              
             <h2 className='text-2xl'>{pName}</h2>
             <button className='btn bg-primary-focus'>Book Now</button> */}
             <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={pImg}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-3xl mb-2 font-bold text-gray-100">{pName}</p>
              <h3 className="text-2xl mb-2 text-blue-500 font-bold tracking-wide text-gray-300">
                Price:{resalePrice}
              </h3>
              <div className='mt-5'>
   
   <label htmlFor="confirm-modal" className="btn text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Now</label>
   </div>
            </div>
          </div>
        </a>

        </div>
    );
};

export default Ad;