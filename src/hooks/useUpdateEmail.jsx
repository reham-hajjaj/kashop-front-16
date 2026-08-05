import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';

export default function useUpdateEmail() {
     const queryClint =useQueryClient();
     return useMutation({
        mutationFn:async(data)=>{
            const response =await authAxiosInstance.patch(`/Profile/change-email`,data);
            return response.data;
        },
         
     });
 
}
