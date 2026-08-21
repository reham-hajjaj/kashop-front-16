import React from 'react'
import IconButton from '@mui/material/IconButton';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import StarIcon from '@mui/icons-material/Star';
import Services from './Services';
import { Box, Card, Grid, Typography } from '@mui/material';
function ServicesCards() {
    const services = [
        {
        title:"Fast Delivery",description:"Get your order quickly",icon:<LocalShippingIcon/>

    },
    {
       title:"Secure Payment",description:"your Payment is completely secure ",icon:<LockIcon/>
    },
    {
       title:"Easy Returns",description:"Easy and fast returns",icon:<StarIcon/>
    },

]

  return (
   <Box sx={{py: { xs: 5, md: 7 }, backgroundColor: "#fafafa", }}
    >
      <container maxWidth="lg">
<Grid container spacing={3} justifyContent="center">
       {services.map((service,index)=>(
        <Grid item size={{xs:12,sm:6,md:4}}  key={index}>
         <Card elevation={0} sx={{height: "100%", minHeight: "230px", borderRadius: 4, p: 4, textAlign: "center",border: "1px solid #eeeeee",backgroundColor: "#ffffff",  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",  transition: "all 0.3s ease",  "&:hover": {transform: "translateY(-8px)",           boxShadow: "0 12px 30px rgba(0,0,0,0.10)",        },  }} >
<Box sx={{width: 70,  height: 70,  borderRadius: "50%", backgroundColor: "#fff3ee",color: "#f4511e", display: "flex", alignItems: "center",   justifyContent: "center", mb: 2.5, "& svg": {fontSize: 36, }, }}>
   {service.icon}
</Box>
<Typography variant="h6"
                  sx={{fontWeight: 700,color: "#222",mb: 1,  }} >
     {service.title}
</Typography>
<Typography variant="body2" sx={{color: "#777", lineHeight: 1.7,maxWidth: "280px",  }}>
 {service.description}
</Typography>
         </Card>
         
          
          
         
        </Grid>
          
        ))} 
    </Grid>
      </container>
 
   </Box>
   

  );
}

export default ServicesCards;
