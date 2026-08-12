import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Hero() {
  const navigate =useNavigate ();
  const handleShopNow =()=>{navigate ("/shop")} ;
  return (
    <Box sx={{backgroundColor:"#F5EDE3",minHeight:{xs:"350px",md:"450px"}, display:"flex",alignItems:"center", justifyContent:"center", mb:4,borderRadius:3}}>
     <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8}>
<Typography  variant="h3" fontWeight="bold" sx={{color:"#f4511e"}}>
Welcom to Our Store
</Typography>
<Typography variant="h2" sx={{mt:2,mb:3,color:"#222",}}>
Discover our amazing products
</Typography>
<Typography varint="h2" sx={{mt:2,mb:3,color:"#222",}}>
Explore our collection and find high-quality products at amazing prices
</Typography>
<Button variant="contained"  size="large" onClick={handleShopNow } sx={{backgroundColor:"#f4511e",px:1.5,borderRadius:2}}>
    Shop Now
</Button>
            </Grid>

        </Grid>
     </Container>
    </Box>
  )
}


