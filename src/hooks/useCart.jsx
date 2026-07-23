import React from 'react';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.jsx";
import useAuthStore from "../store/useAuthStore.jsx";
export default function useCart() {
   const token = useAuthStore.getState().token;
   console.log(token);

   
  const getItems = async () => {
            const response = await authAxiosInstance.get(`/Carts`,{
              headers:{
                Authorization:`Bearer ${token}`
              }
            } );

    return response.data;
        };
    
   
    
  return  useQuery({
 queryKey:["cart","en"],
    queryFn:getItems,
    staleTime:1000 * 60 * 5,
  } );
}
