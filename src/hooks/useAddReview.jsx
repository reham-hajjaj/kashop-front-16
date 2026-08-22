import React from 'react'
import {  useMutation} from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance.jsx';
import { useQueryClient } from '@tanstack/react-query';
export default function useAddReview() {
    
const queryClient=useQueryClient();
   return useMutation({
        mutationFn: async({ProductId,Rating,Comment})=>{
            
  return await authAxiosInstance.post(`/Products/${ProductId}/reviews`,{
 Rating,
  Comment,
  });
        },
     onSuccess: (data, variables) => {
  queryClient.invalidateQueries({
    queryKey: ["product", variables.ProductId],
  });
}, 
           
        
    });
  
}

