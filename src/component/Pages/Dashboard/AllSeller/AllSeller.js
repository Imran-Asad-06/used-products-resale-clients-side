import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const[sellers,setSellers] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data =>setSellers(data))
    },
        [])

    const handleSellerVerify = id => {
        fetch(` http://localhost:5000/users/${id}`, {
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
            <h2 className="text-3xl">All Sellers</h2>
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
        sellers?.map((user, i) =><tr key={user._id}>
            <th>{user?.role === 'seller' && i+1}</th>
            <td>{user?.role === 'seller' &&  user.name}</td>
            <td>{user?.role === 'seller' && user.email}</td>
            <td>{user?.role === 'seller' &&user.role}</td>
            <td>{ user?.role === 'seller' && <button onClick={() => handleSellerVerify(user._id)} className='btn btn-xs btn-primary aria-disabled="true"'>Verify</button>}</td>
            <td>{ user?.role === 'seller' && <button className='btn btn-xs btn-primary'>Delete</button>}</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default AllSeller;