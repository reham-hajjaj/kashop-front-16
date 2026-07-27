
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

function ProfileLayout() {
  return (
    <Box sx={{pt:12 ,px:3}}>
 <Typography variant='h4'>My Profile</Typography>
 <Button>Info</Button>
  <Button>Orders</Button>
  <Box>
    <Outlet/>
  </Box>
 </Box>
  )
}

export default ProfileLayout


