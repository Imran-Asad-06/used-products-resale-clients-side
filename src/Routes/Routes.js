import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../component/PageNotFound/PageNotFound";
import Advertise from "../component/Pages/Advertise/Advertise";
import Blog from "../component/Pages/Blog/Blog";
import Categories from "../component/Pages/Categories/Categories";
import AllBuyer from "../component/Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../component/Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../component/Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../component/Pages/Dashboard/Buyers/MyOrders/MyOrders";
import Dashboard from "../component/Pages/Dashboard/Dashboard";
import AddProduct from "../component/Pages/Dashboard/Seller/AddProduct";
import Home from "../component/Pages/Home/Home";
import Login from "../component/Pages/Login/Login";
import Products from "../component/Pages/ResaleProducts/Products";
import SignUp from "../component/Pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";

import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";

import PrivateRoute from "./PrivateRouter";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
            {
                path:'/categories/:id',
                loader:({params})=> fetch(` https://recycle-bin-server-side-saima-sawrin.vercel.app/categories/${params.id}`),
                element: <Products></Products>
            },
    
          
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
          
        ]
    },

        {
            path:'/dashboard',
            element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
            children:[
                {
                    path:'/dashboard/allUser',
                    element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
                  
                },
                {
                    path:'/dashboard/allSeller',
                    element: <AdminRoute>  <AllSeller></AllSeller></AdminRoute>
             
                },
                {
                    path:'/dashboard/allBuyer',
                    element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
                },
                {
                    path:'/dashboard/orders',
                    element: <MyOrders></MyOrders>
               
                   
                },
                {
                    path:'/dashboard/addProducts',
                    loader:()=> fetch(` https://recycle-bin-server-side-saima-sawrin.vercel.app/products`),
                    element: <AddProduct></AddProduct>
                },
            ]
          },
  
    {
        
        path:'*',
        element: <PageNotFound></PageNotFound>,
      
    },
   

])

export default router;