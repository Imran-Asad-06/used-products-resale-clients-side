import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
    const[buyers,setbuyers] = useState();
    useEffect(()=>{
        fetch('  https://used-product-market-server-one.vercel.app/users')
        .then(res => res.json())
        .then(data =>setbuyers(data))
    },
        [])

    const handleBuyerVerify = id => {
        fetch(`  https://used-product-market-server-one.vercel.app/users/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success(' successfully verified')
              
            }
        })
    }
    return (
        <div>
              <div>
            <h2 className="text-3xl">All buyers</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Verify</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        buyers?.map((user, i) =><tr key={user._id}>
            <th>{user?.role === 'buyer' && i+1}</th>
            <td>{user?.role === 'buyer' &&  user.name}</td>
            <td>{user?.role === 'buyer' && user.email}</td>
            <td>{user?.role === 'buyer' &&user.role}</td>
            <td>{ user?.role === 'buyer' && <button onClick={() => handleBuyerVerify(user._id)} className='btn btn-xs btn-primary'>Verify</button>}</td>
            <td>{ user?.role === 'buyer' && <button className='btn btn-xs btn-primary'>Delete</button>}</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default AllBuyer;