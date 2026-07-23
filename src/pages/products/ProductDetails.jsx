import React from 'react'
import useProduct from '../../hooks/useProduct';
import {useParams} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useAddToCart from '../../hooks/useAddToCart.jsx';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
export default function ProductDetails() {
    const {id} = useParams();
    const {mutate:addToCart} = useAddToCart();
    const {data,isError,isLoading,error} = useProduct(id);
    if(isLoading) return <CircularProgress/>
    console.log(data);
    
  return (
    <Container maxWidth="lg" sx={{mt:5}}>
      <Card sx={{p:4, borderRadius:4, boxShadow:5}}>
        <Grid item xs={12} md={6}>

           <Typography variant='h5' color='text.secondary' sx={{my:2}}>{data.response.name}</Typography>
        <Typography variant='body1' color='text.secondary' >{data.response.description}</Typography>
<Button onClick={()=>{addToCart({ProductId:data.response.id,count:1})}} variant='contained'  full Width size="large"  sx={{mt:3,py:1.5, borderRadius:3,bgcolor:"#1976D2", textTransform:"none" ,fontSize:"16px"}} >


  Add to Cart
</Button>


        </Grid>
      </Card>
       
       
    </Container>
  )
}


