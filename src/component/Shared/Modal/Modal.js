import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const Modal = ({p}) => {
    const{user} = useContext(AuthContext);
    const [booking, setBooking] = useState(null);
    const{pName , resalePrice , pImg } = p;
     console.log(p)
     const handleBooking = event => {
      event.preventDefault();
      const form = event.target;
      const userName = form.userName.value;
      const ProductName = form.ProductName.value;
      const email = form.email.value;
      const  resalePrice = form.resalePrice.value;
      const phone = form.phone.value;
      const location = form.location.value;
      const photo = form.photo.value;
      // [3, 4, 5].map((value, i) => console.log(value))
      const booking = {
        photo,
        userName,
        ProductName,
         email,
         resalePrice,
         phone,
         location
      }


      fetch(' https://used-product-market-server-one.vercel.app/bookings', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.acknowledged) {
                  setBooking(null);
                  toast.success('Booking confirmed');
                  event.target.reset();
              }
              else{
                  toast.error(data.message);
              }
          })


  }

    return (
        <div>
   <input type="checkbox" id="confirm-modal" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">Please Fill up the form for Book Products</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
    {/* USER NAME */}
    <input type="text" name="userName" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user?.displayName || 'not set yet'} disabled readOnly/>
    {/* USER EMAIL */}
    <input type="text" name='email' id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user?.email} required />

    <input type="text" name='ProductName' id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pName} disabled readOnly/>

    <input type="text" name='resalePrice' id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={resalePrice} disabled readOnly/>
    <input type="text" name='photo' id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pImg} disabled readOnly/>

    <input type="text" name='phone' id="phone" placeholder='Enter Phone number' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
    <input type="text" name='location' id="location" placeholder='Location' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>


    <div className="modal-action">
      <label htmlFor="confirm-modal"> <input className='btn btn-accent w-full' type="submit" value="Submit" /></label>
  
    </div>
    </form>
  </div>
</div>
    </div>
);
};


export default Modal;