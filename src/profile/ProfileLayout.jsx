
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ProfileLayout() {
  return (
    <Box sx={{pt:12 ,px:3, direction:"ltr"}} >
 <Typography variant='h4'>My Profile</Typography>
 <Link to=''>Info</Link>
  <Link to='orders' >Orders</Link>
  <Box>
    <Outlet/>
  </Box>
 </Box>
  )
}




