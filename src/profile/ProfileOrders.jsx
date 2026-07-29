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
        <Grid item xs={12} md={7}>
          <Box sx={{mt:10,p:3}}>
          <Typography variant='h2'mb={2} sx={{color:"#f57c00"}}>My Orders</Typography>
              <TableContainer component={Paper}sx={{borderRadius:3, bgcolor:"#FFF3E0"}}>
                <Table>
<TableHead>
 <TableCell sx={{fontWeight:"bold"}}>ID</TableCell>
       <TableCell sx={{fontWeight:"bold"}} >Amount paid</TableCell>
        <TableCell sx={{fontWeight:"bold"}} >Payment Status</TableCell>
         <TableCell sx={{fontWeight:"bold"}} >Status</TableCell>
         <TableCell sx={{fontWeight:"bold"}} >Order Data</TableCell>
         
</TableHead>
<TableBody>
  {data?.orders?.map((order)=>(
    <TableRow key={order.id} sx={{bgcolor:"#FFF3E0"}}>
      <TableCell>{order.id}</TableCell>
       <TableCell>{order.amountPaid}</TableCell>
         <TableCell>{order.paymentStatus}</TableCell>
           <TableCell>{order.status}</TableCell>
             <TableCell>{order.orderDate}</TableCell>
            <TableCell>{order.activityOrderData}</TableCell>
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


