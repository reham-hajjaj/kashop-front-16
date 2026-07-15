import React from 'react'
import {  useMutation} from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance';
export default function useAddToCart() {
    useMutation({
        mutationFn:asyanc(ProductId,count)=>{
  return await authAxiosInstance.post(`/Carts`,{
   ProductId: ProductId,
   count: count
  });
        }
           
        
    });
  
}


