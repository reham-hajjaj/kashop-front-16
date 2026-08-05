
import { children } from "react";
import { createBrowserRouter }  from"react-router";
import  Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Mainlayout from "../layout/Mainlayout";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ProductDetails from "../pages/products/ProductDetails";
import ProtectedRouter from "../ProtectedRouter";
import Products from "../pages/products/Products";
import Checkout from "../checkout/Checkout";
import ProfileLayout from "../profile/ProfileLayout";
import ProfileInfo from "../profile/ProfileInfo";
import ProfileOrders from "../profile/ProfileOrders";
import ShopLayout from "../pages/shop/ShopLayout";

import ShopProduct from "../pages/shop/ShopProduct";
import ProductFilter from "../pages/shop/ProductFilter";
import UpdateEmail from "../profile/UpdateEmail";

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
 path: "products/",
    element: <Products/>,
   },
    {
      path: "product/:id",
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
    path: "shop",
    
    element: 
    <ProtectedRouter >
      <ShopLayout/>
    </ProtectedRouter>,
    children:[
      {
        index:true,
        element:< ShopProduct/>
      },{
        path:'productfilter',
        element:< ProductFilter/>
      }
    
    ]
      
   } ,
   {
    path: "checkout",
    
    element: 
    <ProtectedRouter >
      <Checkout/>
    </ProtectedRouter>
    
      
   } ,
    {
    path: "profile",
    
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
        path:'change-email',
        element:<UpdateEmail/>
      }
    ]
    
      
   } ,
   {
    path: "login/",
    element: <Login/>,
       
   } ,
    {
    path: "register/",
    element: <Register/>,
   } ,
]
  },
]);
export default router;