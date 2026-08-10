import React from 'react'
import {  useMutation} from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance.jsx';
import { useQueryClient } from '@tanstack/react-query';
export default function useAddReview() {
    
const queryClint=useQueryClient();
   return useMutation({
        mutationFn: async({ProductId,Rating,Comment})=>{
            
  return await authAxiosInstance.post(`/Products/${ProductId}/reviews`,{
 Rating,
  Comment,
  });
        },
        onSuccess:(variables)=>{
            queryClient.invalidateQueries({
                queryKey:["reviews,variables,ProductId"]
            });
        },
           
        
    });
  
}

