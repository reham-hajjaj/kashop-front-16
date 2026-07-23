
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