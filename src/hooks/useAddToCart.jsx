import React from 'react'
import {  useMutation} from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance.jsx';

export default function useAddToCart() {

   return useMutation({
        mutationFn:async(productId,count)=>{
            
  return await authAxiosInstance.post(`/Carts`,{
   ProductId:productId,
   count:count
  });
        }
           
        
    });
  
}


