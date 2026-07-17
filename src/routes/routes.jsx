import { Home, Login } from "@mui/icons-material";
import { Children } from "react";
import { createBrowserRouter } "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
Children:[
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
    element: <ProductDetails/>,
   },
   {
    path: "cart/",
    
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