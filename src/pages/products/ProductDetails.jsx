import React from 'react'
import useProduct from '../../hooks/useProduct';
import {useParams} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export default function ProductDetails() {
    const {id}=useParams();
    const {data,isLoading,isError,error} = useProduct(id);
    if(isLoading) return <CircularProgress/>
    console.log(data);
    
  return (
    <Box>
        <Typography>{data.response.description}</Typography>
        <Typography>{data. response.name}</Typography>

    </Box>
  )
}


