import React from 'react'
import IconButton from '@mui/material/IconButton';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import StarIcon from '@mui/icons-material/Star';
import Services from './Services';
import { Grid } from '@mui/material';
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
    <Grid container spacing={3} justifyContent="center">
       {services.map((service)=>(
        <Grid size={{xs:12,sm:6,md:4}}>
 <Services key={services.title}
           title={service.title}
           description={service.description}
           icon={service.icon}
           />
        </Grid>
          
        ))} 
    </Grid>

  );
}

export default ServicesCards;
