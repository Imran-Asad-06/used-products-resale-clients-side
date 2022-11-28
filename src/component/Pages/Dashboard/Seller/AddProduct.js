import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const AddProduct = () => {

    const {user} = useContext(AuthContext);

    const addProducts = useLoaderData()
    const {pName , pImg , location ,resalePrice ,seller ,OriginalPrice, Use
    }= addProducts;
  

    const  handleAddService = (event)=>{
        event.preventDefault();
    const form = event.target;
    const pName = form.pName.value;
    const pImg = form.pImg.value;
    const location = form.location.value;
    const resalePrice = form.resalePrice.value;
    const OriginalPrice = form.OriginalPrice.value;
    // const email = user?.email || 'unregistered';


    const service = {
      
       pName,
       pImg,
       OriginalPrice,
       location ,
       resalePrice ,
       seller ,
        Use
      
    }
        fetch(' http://localhost:5000/products',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(service),
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                alert('successfully added')
                event.target.reset();
            }
        })
    }
    return (
        <div className='mx-6'>
     <h2 className="text-4xl">Add Service</h2>
        <div>
            <form onSubmit={handleAddService}>
                
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" name='pImg' placeholder='img' className="input input-ghost w-full  input-bordered" />
                    <input type="text" name='pName'placeholder='Product name' className="input input-ghost w-full  input-bordered" />
                    <input type="text" name='OriginalPrice' placeholder='OriginalPrice'  className="input input-ghost w-full  input-bordered" required />
                    <input  type="rating" name ='resalePrice'placeholder='resalePrice'className="input input-ghost w-full  input-bordered" />
                    <input  type="price" name='Use'placeholder='use of years'className="input input-ghost w-full  input-bordered"  />
                    <input  type="price" name='location'placeholder='location'className="input input-ghost w-full  input-bordered"  />
                    <input  type="price" name='Seller'placeholder='Seller Name'className="input input-ghost w-full  input-bordered"  />
                </div>
        

                <input className='btn mt-3 bg-primary' type="submit" value="Add Product" />
            </form>
        </div>


    </div>
    );
};


export default AddProduct;