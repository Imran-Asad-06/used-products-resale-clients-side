import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../component/Shared/Header/Header';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                     {/* {
                        isBuyer &&
                        <> */}
                         <li><Link to="/dashboard/orders">My Orders</Link></li>
                     
                        {/* </>
                      }
                 
                       {
                         isSeller &&
                         <> */}
                                 <li><Link to="/dashboard/addProducts">Add A Products</Link></li>
                                 <li><Link to="/dashboard/myProducts">My Products</Link></li>
                                 <li><Link to="/dashboard/myBuyers">My Buyers</Link></li>
                         {/* </>
                 
                        
                        } */}
                  
               
                        {
                            isAdmin && <>
                                     <li><Link to="/dashboard/allUser">All users</Link></li>
                                    <li><Link to="/dashboard/allSeller">All Seller</Link></li>
                                    <li><Link to="/dashboard/allBuyer">All Buyer</Link></li>
                                    <li><Link to="/dashboard/report">Report</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;