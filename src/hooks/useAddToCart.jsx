import React from 'react'
import {  useMutation} from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance.jsx';
import { useQueryClient } from '@tanstack/react-query';
export default function useAddToCart() {
    
const queryClint=useQueryClient();
   return useMutation({
        mutationFn: async({ProductId,count})=>{
            
  return await authAxiosInstance.post(`/Carts`,{
   ProductId,
   count,
  });
        },
        onSuccess:()=>{
            queryClint.invalidateQueries({
                queryKey:["cart"]
            });
        },
           
        
    });
  
}


