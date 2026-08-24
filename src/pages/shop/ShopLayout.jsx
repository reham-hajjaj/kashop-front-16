import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ProductFilter from './ProductFilter';


function ShopLayout() {
   const [filter, setFilter] = useState({page: 1,limit: 6,minPrice: "", maxPrice: "",sortBy: "price",ascending: false,});
  return (
     <Box sx={{ mt:18}}>
    <Grid container spacing={3} sx={{direction:"ltr"}}>
      <Grid item xs={12} md={3}>
  < ProductFilter 
  
  />
      </Grid>
      <Grid item xs={12} md={9}>
        
        
            <Outlet/> 
      </Grid>
        
    </Grid>
    
 
    </Box>
  );
}

export default ShopLayout;
