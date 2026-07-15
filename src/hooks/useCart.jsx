import React from 'react'

import {useQuery} from '@tanstack/react-query';
export default function useCart() {
   
        const getIteam = async()=>{
            const response = await axios.post(`/Carts`);
    return response.data;
        }
    
   
    
  return  useQuery({
 queryKey:['cart','en'],
    queryFn:getIteam ,
    staleTime:1000 * 60 * 5
  } );
}
