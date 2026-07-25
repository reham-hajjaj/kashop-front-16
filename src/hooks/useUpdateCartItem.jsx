import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useUpdateCartItem() {
     const queryClint =useQueryClient();
  return useMutation({
    mutationFn:async({productId,count})=>{
        await authAxiosInstance.patch(`/Carts/${productId}`,
            {count:count} )

    },
      onSuccess:()=>{
            queryClint.invalidateQueries({
                queryKey:["cart"]
            });
        },
  });
    
  }


