import React from 'react'
import useProduct from '../../hooks/useProduct';
import {useParams} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useAddToCart from '../../hooks/useAddToCart.jsx';
export default function ProductDetails() {
    const {id} = useParams();
    const {mutate:addToCart} = useAddToCart();
    const {data,isError,isLoading,error} = useProduct(id);
    if(isLoading) return <CircularProgress/>
    console.log(data);
    
  return (
    <Box>
       
        <Typography>{data.response.name}</Typography>
        <Typography>{data.response.description}</Typography>
<Button variant='contained full Width' sx={{mt:2,py:1.2, textTransform:"none" ,fontSize:"16px"}}>
  Add to Cart
</Button>
    </Box>
  )
}


