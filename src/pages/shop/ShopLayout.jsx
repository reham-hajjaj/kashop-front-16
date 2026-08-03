import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

function ShopLayout() {
   
  return (
     <Box sx={{ display:"flex", gap:3, mt:18}}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
  <Box sx={{width:"25%"}}> ProductFilter</Box>
      </Grid>
      <Grid item xs={12} md={9}>
        
          <Box sx={{ flex:1}}>ShopProduct</Box>
      </Grid>
        
    </Grid>
    
   <Box>
    <Outlet/>
   </Box>
    </Box>
  )
}

export default ShopLayout
