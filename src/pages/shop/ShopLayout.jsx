import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Outlet } from 'react-router-dom'

function ShopLayout() {
  return (
    <Box sx={{ display:"flex", gap:3, mt:18}}>
      <Typography>ShopProduct</Typography>
       <Box sx={{ width:'25%'}}>Product</Box>
    <Box sx={{flex:1}}> ProductFilter</Box>
   <Box>
    <Outlet/>
   </Box>
    </Box>
  )
}

export default ShopLayout
