import React from 'react'
import Cart from "./pages/cart/Cart"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Register from "./pages/register/Register"
import Mainlayout from "./layout/Mainlayout"
import { Router } from "react-router-dom"
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
  element: <Mainlayout/>,
    children:[ 
        {
index:true,
        element:<Home/>
        },
        {
           path: "cart",
              element:<Cart/>
        },
        
        {
          path: "Products",
              element:<Products/>  
        },
        {
      path: "products/:id",
    element: <ProductDetails/>
   },
   {
    path: "cart",
    
    element: 
    <ProtectedRouter >
      <Cart/>
    </ProtectedRouter>
    
      
   } ,
        {
          path:"profile",
        element: 
    <ProtectedRouter >
      <ProfileLayout/>
    </ProtectedRouter>,
    children:[
      {
        index:true,
        element:<ProfileInfo/>
      },{
        path:'orders',
        element:<ProfileOrders/>
      },
      {
        path:'updateemail',
        element:<UpdateEmail/>
      }
    ]

          
        },
        {
            path: "Login",
              element:<Login/>    
        },

        {
            path: "register",
              element:<Register/>     
        }
       
        
    ]
  },
]);
export default router;