import React, { useContext, useState } from 'react';
import img from '../../assets/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';




const SignUp = () => {

    const {createUser } = useContext(AuthContext);
    const[error , setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
   
   
    
     const handleSubmit = event => {
         event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const email = form.email.value;
         const photoUrl = form.img.value;
         const password = form.password.value;
         const role = form.role.value;
         console.log(name, email, password, role, photoUrl);


         createUser(email, password)
         .then( result => {
             const user = result.user;
             alert('Successfully Registered ');
             navigate(from, {replace:true});
             console.log(user);
             form.reset();
            
             
         })
         .catch( e => {
             alert(e)
             setError(e.message)
 
         });

         const users = {
            name:name,
            email:email,
            role,
            img
          
        }
            fetch('http://localhost:5000//users',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(users),
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
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input type="text" name='img' placeholder="photoUrl" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your role</label>
                
                    {/* <select id="countries" name='role' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>select your role</option>
                      <option>Buyer</option>
                      <option>Seller</option> 
                      
                  </select> */}
                      <input type="text" name='role' placeholder="type buyer or seller" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                    <p className='text-center'>Already have an account? <Link className='text-primary font-bold' to="/login">Login</Link> </p>
                     <p className='text-red-500'>{error}</p>
                </form>
               
            </div>
        </div>
    </div>
);
};


export default SignUp;