import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import logo from '../../assets/assets/logo-96.png';
const Header = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
          .then(() => { })
          .catch(err => console.log(err));
  }

  const menuItems = <React.Fragment>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      

      {user?.uid ?
          <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><button onClick={handleLogOut}>Sign out</button></li>
          </>
          : <li><Link to="/login">Login</Link></li>}
         
  </React.Fragment>
    return (
      <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
          <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menuItems}
              </ul>
              
          </div>
         <img className='w-12 h-12' src={logo}alt="" />
          <Link to="/" className="btn btn-ghost normal-case text-xl ">Old-Furniture</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 ">
              {menuItems}
          </ul>
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>

</label>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
  </div>

    );
};

export default Header;