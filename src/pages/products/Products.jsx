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
const[filter,setFilter]=useState({ page:1,limit:6 ,minPrice:"",maxPrice:"",sortBy:"price",ascending:"false"});

const{data,isLoading,isError ,error}=useProducts();
  const{t} =useTranslation();
  if(isLoading) return <CircularProgress />
  return (
    
   <Box sx={{ mt: 10,pt: 4,    pb: 6,  textAlign: "center",width: "100%",}} className=" Our Products" components="section">
   
    <Typography  component="h1" variant="h4" fontWeight="bold"sx={{ mb: 1, color: "text.primary",}}>{t('Products')}</Typography>
   <Typography  variant="body2" sx={{color: "text.secondary",maxWidth: 600, mx: "auto",  mb: 5,   lineHeight: 1.8, }} >Discover high-quality home appliances designed to make your daily life easier and more comfortable</Typography>
    <Grid container  spacing={3}   justifyContent="center"sx={{maxWidth: 1100, mx: "auto",px: 2, }}  >

     
    {data?.response?.data?.map((product)=>{
 return <Grid item xs={12} sm={6} md={4} key={product.id} sx={{display: "flex", justifyContent: "center",}} >
 <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'inherit'}}  >
 
  <Card  sx={{width: "100%", maxWidth: 250,   borderRadius: 3,   overflow: "hidden",backgroundColor: "background.paper",    boxShadow: 3,  transition: "all 0.3s ease","&:hover": {transform: "translateY(-5px)",boxShadow: 6,  }, }} >
  <CardMedia 
  
   component="img"
    image={product.image} sx={{width: "100%", height: 180,objectFit: "contain",    backgroundColor: "background.default", p: 2,}} ></CardMedia>
 
    <Typography component="h5" variant="body1"  fontWeight="bold" noWrap sx={{px: 2, pt: 1.5, color: "text.primary", }} >{product.name}</Typography>
<CardContent sx={{pt: 1, pb: 2,textAlign: "center",}}>
  
<Typography  variant="body1" fontWeight="bold" sx={{color: "primary.main", mb: 1, }}  >{product.price}$</Typography>
  <Button onClick={()=> { console.log('Button clicked'); addToCart({ ProductId:data.response.id,count: 1})}} variant='contained'  size="small" sx={{mt: 1,  px: 2, py: 0.8, borderRadius: 2, bgcolor: "primary.main",color: "primary.contrastText", textTransform: "none", fontSize: "14px",fontWeight: 600,"&:hover": {bgcolor: "primary.dark",}, }} >

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

