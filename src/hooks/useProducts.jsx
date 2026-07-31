import React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import axiosInstance from '../api/axiosInstance';
export default function useProducts(filter){
    const getProducts = async()=>{
    const response = await axiosInstance.get(`/Products`,);

    return response.data;

  }
 const query =useQuery({
  queryKey:['products'],
    queryFn:getProducts,
    staleTime:1000 * 60 * 5
  })
  return query;
   
}
