import React, { useState } from 'react'
import useProducts from '../../hooks/useProducts'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Link, NavLink}  from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';


const  Products = () => {

const {data ,isLoading, isError ,error} = useProducts();
  const{t} =useTranslation();
  if(isLoading) return <CircularProgress />
  return (
   <Box className="products" components="section">
    <Typography components= "h1" variant="h2">{t('Products')}</Typography>
  
    <Grid container spacing={{xs:2,md:3}} sx={{ textAlign:'center',pt:12 }} >

     
    {data?.response?.data?.map((product)=>{
 return <Grid item size={{ xs: 12, sm:6, md: 4}} key={product.id}>
 <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'inherit'}}  >
 
  <Card sx={{maxWidth:300,mx:'auto',borderRadius:3,boxShadow:4,}}>
  <CardMedia
   component="img"
    image={product.image}
  sx={{width:200, height:220, bgcolor:"#f8f8f8"}}
  ></CardMedia>
 
    <Typography component= "h5" variant="h5" color ="primary" fontWeight="bold" noWrap mt={1}>{product.name}</Typography>
<CardContent sx={{p:2}}>
  
<Typography component= "span" variant="body1" >{product.price}$</Typography>
  <Button onClick={()=> { console.log('Button clicked'); addToCart({ ProductId:data.response.id,count: 1})}} variant='contained'  size="small"  sx={{mt:1,py:1,px:1, borderRadius:"12px",bgcolor:"#000", textTransform:"none" ,fontSize:"16px"}} >

  Add to Cart
</Button>
    
  </CardContent>
 </Card>
 
 </Link>

 </Grid>
    })}
 </Grid>
 
   </Box>
  )
 
}

export default Products;

