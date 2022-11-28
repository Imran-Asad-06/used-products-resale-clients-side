import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Category = ({category}) => {
    const {_id,image , title} = category;
    return (
                  
        <div className="card card-compact w-96 bg-base-100 shadow-xl text-center ">
  <figure><Link to={`/categories/${_id}`}><img src={image} alt="Shoes" /></Link></figure>
  <div className="card-body text-center">
    
    <h2 className="card-title"><Link  to={`/categories/${_id}`}><h3 className='text-center text-2xl'>{title}</h3></Link></h2>
  </div>
</div>
    
      );
    };

export default Category;