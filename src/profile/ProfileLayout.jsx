
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ProfileLayout() {
  return (
    <Box sx={{minHeight: "100vh",pt: { xs: 10, md: 12 },px: { xs: 2, md: 4 },pb: 6,}}>
 
 <Box sx={{ maxWidth: 1200, mx: "auto",}} >
  <Typography variant='h4' sx={{fontWeight: "bold",color: "#222",mb: 2,}}>My Profile</Typography>
  <Box sx={{display: "flex",gap: 1,mb: 5, }}>
     <Link to='' style={{textDecoration:"none",background:"#2e7d32",color:"white",padding:"9px 24px",borderRadius:'10px',fontWeight:"bold", textAlign:'center'}}>Info</Link>
  <Link to='orders' style={{textDecoration:"none",background:"#2e7d32",color:"white",padding:"9px 24px",borderRadius:'10px',fontWeight:"bold"}} >Orders</Link>
  </Box>
 
 </Box>
 
  <Box sx={{width: "100%"}}>
    <Outlet/>
  </Box>
 </Box>
  )
}




