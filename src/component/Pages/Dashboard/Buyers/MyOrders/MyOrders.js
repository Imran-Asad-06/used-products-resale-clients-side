import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../context/AuthProvider';
import Order from './Order';

const MyOrders = () => {
    const{loading} = useContext(AuthContext)
  

    const[orders, setOrders] = useState([])
        // console.log(categories)

    useEffect(()=>{
        fetch(' http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data => setOrders(data))
    },
        [])
        if(loading){
            return  <div className="text-center">
            <progress className="progress w-56"></progress>
        </div>
              
        
        }
    return (
<div>
<div>
            
            {
                orders.map(order => <Order key={order._id} order={order}></Order>)
            }
            
            
                    </div>
</div>
    );
};

export default MyOrders;