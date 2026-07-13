import React from 'react'
import useProducts from '../../hooks/useProducts'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Grid from '@mui/material/Grid';


const  Products = () => {

  const {data ,isLoading, isError ,error} =useProducts();
  if(isLoading ) return <CircularProgress />
  return (
   <Box className="products" components="section">
    <Typography components= "h1" variant="h2">Products</Typography>
    <Grid container spacing={{xs:2,md:3}} sx={{ textAlign: 'center' }} >
    {data?.response?.data?.map((product)=>{
 return <Grid Item size={{ xs: 12, md: 4 }}>
  <Card>
  <CardMedia
   component="img"
    image={product.image}
  sx={{width:200}}
  ></CardMedia>
  <CardContent>
    <Typography component= "h4" variant="h4">{product.name}</Typography>
     <Typography component= "span" variant="span">{product.price}$</Typography>
  </CardContent>
 </Card>
 </Grid>
    })}
 </Grid>
   </Box>
  )
 
}

export default Products

