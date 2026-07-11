import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { CircularProgress, Typography } from '@mui/material';
import useCategories from '../../hooks/useCategories';
import Box from '@mui/material/Box';
import axios from 'axios'
export default function Categories() {
 const { data, isError, isLoding , error }=useCategories();
 console.log(data?.response?.data)
  if(isLoding)return<CircularProgress/>;
  if(isError) return<Typography color='red'>{error} </Typography>
  return (
    <div>
   {data?.response?.data?.map((category)=>{
    return <h1 key={category.id}>{category.name}</h1>
   })}
    </div>
  )
}


