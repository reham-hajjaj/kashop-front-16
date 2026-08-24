import React, { useState } from 'react'

import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import useShopProduct from '../../hooks/useShopProduct';
import ProductFilter from './ProductFilter';
import { Rating } from '@mui/material';
export default function ShopProduct() {
  const [filter,setFilter]=useState({page:1, limit:3,sortBy:"price",minPrice:"", maxPrice:"",ascending: false});
    const handleApplyFilter =(newFilter)=>{setFilter(newFilter);};
  const {data, isLoading, isError, error}=useShopProduct(filter);

     console.log(data);
     
      if( isLoading) return <CircularProgress />
        if(isError) return <Typography color="error">{error?.message}</Typography>
    
  return ( 
   <Box sx={{textAlign: "center",mb: {xs: 3,sm: 4, md: 5,},mt: { xs: 2,md: 3,}, }} >
<Typography variant='h4'   sx={{fontWeidth:700 ,fontSize: {xs: "1.8rem",sm: "2.2rem",md: "2.7rem", },textAlign:"center" ,mb:4}}>Our Products</Typography>
<Typography sx={{
      color: "text.secondary",fontSize: {xs: "0.9rem",sm: "1rem",md: "1.05rem", },maxWidth: 650,mx: "auto", lineHeight: 1.7,px: 2,  }} >Explore our latest collection of high-quality products. Use the filters to
    find exactly what you're looking for at the best price.</Typography>
   
<ProductFilter onApply={handleApplyFilter} />
   <Grid container spacing={3}  sx={{mt:4}}>
    {data?.response?.data?.map((product)=>{
 return <Grid item size={{ xs: 12, md: 4}}  key={product.id} >

      <Card sx={{ maxWidth:300,borderRadius:3,boxShadow:3}} >
<CardMedia component="img" height="150px" width="150px"
image={product.image}
 alt={product.name} 
  sx={{objectFit:"contain", p:2 }}>
</CardMedia>
 
<CardContent >
  <Typography variant='h6'>{product.name}</Typography>
  <Typography>{product.price}$</Typography>
  <Typography  sx={{fontSize:20,color:"black"}}>{product.rate}</Typography>
  <Rating/>
</CardContent>
      </Card>
    </Grid>
    
 
    }
      
    )}
   
   </Grid>
   </Box>
  )
}


