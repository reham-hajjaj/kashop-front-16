import { CircularProgress, Typography } from '@mui/material';
import axios from 'axios'
import React from 'react'
import Typography from '@mui/material';
import { useQueries } from '@tanstack/react-query';
import useCategorise from '../../hooks/useCategorise';
import Box from '@mui/material/Box';

export function Categories() {
    const getCategories =async()=>{
        
        const response =await axiosInstance.get('/Categories',{

        });
        
        return response.data;
    }
const{data,isloding,isError,error}=useQuery({
    querykey:['categories'],
    queryFn:getCategories,
    staleTime:1000 * 60 * 5
   
})
 if(isloding) return <CircularProgress/>
    if(isloding) return<Typography color='red'>{error}</Typography>
  return (
    <div>
   {data.response.data.map( (category)=><Box> <Typography>{category.name}</Typography> </Box>)}
    </div>
  )
}


