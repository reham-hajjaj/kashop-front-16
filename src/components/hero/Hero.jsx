import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroImage from "../../assets/images/hero.jpg"

export default function Hero() {
  const navigate =useNavigate ();
  const handleShopNow =()=>{navigate ("/shop")} ;
  return (
    <Box sx={{width:"100%",height:{xs:"500px", sm:"600px",md:"700px"},borderRadius:{xs:0,md:3},overflow:"hidden", position:"relative"}}>
      <Box component="img" src={heroImage}alt='Hero' sx={{width:"100%", height:"100%", display:"block",objectFit:"cover", objectPosition:"center"}}
/>
     <Container maxWidth="xl" sx={{ position: "absolute",  inset: 0, display: "flex",  alignItems: "center",   justifyContent: "center",  textAlign: "center"}}
         >
<Box sx={{  maxWidth: "700px", color: "white"}}>
<Typography variant="h6" fontWeight="bold" sx={{color: "#ff7043", mb: 2, }} >Welcome to Our Store</Typography>
<Typography variant="h1" sx={{ fontWeight: 800, lineHeight: 1.1, mb: 3, fontSize: { xs: "2.5rem",sm: "3.5rem",  md: "4.5rem", },}} >Discover Our Amazing Products</Typography>
<Typography variant="h6"sx={{color: "rgba(255,255,255,0.85)",lineHeight: 1.7,mb: 4,fontWeight: 400, }}>
  Explore our collection and find high-quality products at amazing
            prices
</Typography>
<Button variant="contained"
            size="large"
            onClick={handleShopNow}
            sx={{backgroundColor: "#f4511e", px: 5, py: 1.7, borderRadius: 2,fontWeight: "bold", textTransform: "none","&:hover": { backgroundColor: "#d84315",},}} >
  Shop Now
</Button>
</Box>
     </Container>
    </Box>
  )
}


