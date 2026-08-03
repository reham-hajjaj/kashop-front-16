import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';

export default function useUpdateProfile() {
     const queryClint =useQueryClient();
     return useMutation({
        mutationFn:async({email})=>{
            const response =await authAxiosInstance.patch(`/Profile`,{
                email
            });
            return response.data;
        },
          onSuccess:()=>{
            queryClint.invalidateQueries({
                queryKey:["profile"]
            });
        },
     });
 
}



