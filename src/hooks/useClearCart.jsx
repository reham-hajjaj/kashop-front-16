import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';

export default function useClearCart() {
    const queryClint =useQueryClient();
    
 return useMutation({
    mutationFn:(cartItemId)=>authAxiosInstance.delete(`/Carts/${cartItemId}
        `),
         onSuccess:()=>{
            queryClint.invalidateQueries({
                queryKey:["cart"]
            });
        },
 })
}
