import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Hero() {
  const navigate =useNavigate ();
  const handleShopNow =()=>{navigate ("/shop")} ;
  return (
    <Box sx={{backgroundColor:"#F5E6D3",minHeight:{xs:"320px",md:"400px"}, display:"flex",alignItems:"center", justifyContent:"center", mb:4,borderRadius:3}}>
     <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center" justifyContent="center" textAlign="center">
            <Grid item xs={12}>
<Typography  variant="h3" fontWeight="bold" sx={{color:"#f4511e"}}>
Welcom to Our Store
</Typography>
<Typography variant="h2" sx={{mt:2,mb:2,color:"#222", fontWeight:"bold"}}>
Discover our amazing products
</Typography>
<Typography varint="body1" sx={{mb:3,color:"#666",}}>
Explore our collection and find high-quality products at amazing prices
</Typography>
<Box sx={{ display:"flex", justifyContent:"center", width:"100%"}}>
<Button variant="contained"  size="large" onClick={handleShopNow } sx={{backgroundColor:"#f4511e",py:1.5, px:4,borderRadius:2}}>
    Shop Now
</Button>
</Box>

            </Grid>

        </Grid>
     </Container>
    </Box>
  )
}


