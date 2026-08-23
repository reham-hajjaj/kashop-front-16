import React from 'react'
import useProfile from '../hooks/useProfie';
import { Box, Card, CardContent, CircularProgress, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
export default function ProfileOrders() {
      const {data, isLoading, isError, error} =useProfile();
     if(isLoading) return<CircularProgress/>;
     if(isError) return <Typography>{error}</Typography>
     console.log(data);
  return (
      
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Box sx={{width: "100%",maxWidth: 1100,   mx: "auto", mt: { xs: 3, md: 6 },px: { xs: 1, md: 3 }, }}>
            <Box sx={{mb:3}}>
<Typography variant='h2'mb={2} sx={{color: "text.secondary", }} >My Orders</Typography>
            </Box>
          
              <TableContainer component={Paper}sx={{borderRadius: 3,overflowX: "auto",boxShadow: "0 8px 30px rgba(0,0,0,0.08)",bgcolor: "#FFFFFF", }}>
                <Table sx={{minHeight:850}}>
<TableHead>
 <TableCell sx={{fontWeight:"bold"}}>ID</TableCell>
       <TableCell sx={{fontWeight:"bold"}} >Amount paid</TableCell>
        <TableCell sx={{fontWeight:"bold"}} >Payment Status</TableCell>
         <TableCell sx={{fontWeight:"bold"}} >Status</TableCell>
         <TableCell sx={{fontWeight:"bold"}} >Order Data</TableCell>
         
</TableHead>
<TableBody>
  {data?.orders?.map((order)=>(
    <TableRow key={order.id} sx={{bgcolor: "#F3F8F4","&:last-child td": {borderBottom: 0,},}}>
      <TableCell sx={{ fontWeight: 600 }}>{order.id}#</TableCell>
       <TableCell sx={{ fontWeight: 600 }} >{order.amountPaid}$</TableCell>
         <TableCell size="small" sx={{fontWeight: 600,  bgcolor: "#FFF3E0",color: "#F57C00",}}>{order.paymentStatus}</TableCell>
           <TableCell sx={{fontWeight: 600,  bgcolor: "#E8F5E9", color: "#2E7D32",  }}>{order.status}</TableCell>
             <TableCell sx={{color:"#2E7D32"}}>{order.orderDate}</TableCell>
            <TableCell sx={{color: "#2E7D32", fontSize: "0.9rem",}} >{order.activityOrderData}</TableCell>
    </TableRow>
  ))}
</TableBody>
                </Table>

              </TableContainer>
          
          </Box>
        </Grid>
      </Grid>

    
      

  
  )
}


