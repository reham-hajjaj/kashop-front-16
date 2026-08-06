import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';

export default function useChangePassword() {
     const queryClient =useQueryClient();
     return useMutation({
        mutationFn:async(data)=>{
            const response =await authAxiosInstance.patch(`/Profile/change-password`,data);
            return response.data;
        },
         onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["profile"]
            });
        },
     });
 
}
