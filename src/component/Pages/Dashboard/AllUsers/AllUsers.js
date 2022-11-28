//import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
 
  const[users,setUsers] = useState();
    useEffect(()=>{
        fetch('  https://used-product-market-server-one.vercel.app/users')
        .then(res => res.json())
        .then(data =>setUsers(data))
    },
        [])

    const handleSellerVerify = id => {
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
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users?.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{ user?.status !== 'verify' && <button onClick={() => handleSellerVerify(user._id)} className='btn btn-xs btn-primary '>Verify</button>}
     </td>
            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;