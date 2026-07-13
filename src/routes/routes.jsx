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
      path: "producters/",
    element: <Products/>,
   },
   {
    path: "cart/",
    element: <Cart/>,
      
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