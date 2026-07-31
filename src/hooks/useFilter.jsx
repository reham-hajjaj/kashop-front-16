
import {useQuery} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.jsx";
import useAuthStore from "../store/useAuthStore.jsx";
import i18n from "../i18next.jsx";
import { useState } from "react";

export default function useFilter() {
  
const[filter,setFilter]=useState({
  page:1,limit:3,sortBy:"price",ascending:false,min:"Price",max:"price"
});
   return{filter,setFilter}
  const getItems = async()=>{
            const response = await authAxiosInstance.get(`/Products`,{
                
             
            } );

    return response.data;
        };
    
   
    
  return  useQuery({
 queryKey:["filter",i18n.language],
    queryFn:getItems,
    staleTime:1000 * 60 * 5,
  } );
}
