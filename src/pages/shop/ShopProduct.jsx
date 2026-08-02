import React, { useState } from 'react'

import { Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import useShopProduct from '../../hooks/useShopProduct';
import ProductFilter from './ProductFilter';

export default function ShopProduct() {
  const [filter,setFilter]=useState({page:1, limit:3,sortBy:"price",ascending: false});
  const {data, isLoading, isError, error}=useShopProduct(filter);
     console.log(data);
      if( isLoading) return <CircularProgress />
        if(isError) return <Typography color="error">{error?.message}</Typography>
    
  return (
   <>
   <ProductFilter filter={filter} setFilter={setFilter}/>
   <Grid container spacing={3} sx={{mt:2}}>
    {data?.data?.map((product)=>(
      <Grid item key={product.id} xs={12} sm={6} md={4}>
      <Card sx={{borderRadius:3,boxShadow:3}} >
<CardMedia component="img" height="180px" image={product.image} alt={product.name}  sx={{ObjectFit:"contain",p:2}} />

 
<CardContent >
  <Typography variant='h6'>{product.name}</Typography>
  <Typography>{product.price}$</Typography>
  <Typography color="text.secondary">{product.rate}</Typography>
</CardContent>
      </Card>
    </Grid>
    )
 
    )}
   
   </Grid>
   </>
  )
}


