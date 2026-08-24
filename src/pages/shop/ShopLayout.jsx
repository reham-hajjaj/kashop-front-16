import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ProductFilter from './ProductFilter';


function ShopLayout() {
   const [filter, setFilter] = useState({page: 1,limit:3,minPrice: "", maxPrice: "",sortBy: "price",ascending: false,});
   const handleApplyFilter = (newFilter) => {
  setFilter({ ...newFilter, page: 1,});};
  return (
     <Box sx={{ mt:18,px:2}}>
    <Grid container spacing={3} sx={{ direction: "ltr" }}>
      <Grid item size= {{xs:12,md:3}}>
  <ProductFilter onApply={handleApplyFilter} />
  
  
      </Grid>
      <Grid item size= {{xs:12,md:9}}>
        
        
            <Outlet context={{ filter }}/> 
      </Grid>
        
    </Grid>
    
 
    </Box>
  );
}

export default ShopLayout;
