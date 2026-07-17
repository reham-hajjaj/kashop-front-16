import React from 'react'
import {  useMutation} from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance.js';
export default function useAddToCart() {
   return useMutation({
        mutationFn:async(values)=>{
            
  return await authAxiosInstance.post(`/Carts`,{
   ProductId:values.ProductId,
   count:values.count
  });
        }
           
        
    });
  
}


