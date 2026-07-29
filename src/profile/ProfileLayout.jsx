
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ProfileLayout() {
  return (
    <Box sx={{ dislay:"flex", justifyContent:"center" ,gap:3,mb:4,   pt:12 ,px:3, direction:"ltr"}} >
 <Typography variant='h4' >My Profile</Typography>
 <Box sx={{ dislay:"flex", gap:4,mb:4}}>
  <Link to='' style={{textDecoration:"none",background:"#2e7d32",color:"white",padding:"10px 24px",borderRadius:'12px',boxShadow:"0 4px 10px",fontWeight:"bold", textAlign:'center'}}>Info</Link>
  <Link to='orders' style={{textDecoration:"none",background:"#2e7d32",color:"white",padding:"10px 24px",borderRadius:'12px',boxShadow:"0 4px 10px",fontWeight:"bold"}} >Orders</Link>
 </Box>
 
  <Box>
    <Outlet/>
  </Box>
 </Box>
  )
}




