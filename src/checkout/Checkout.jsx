import React, { useState } from 'react'
import useCart from '../hooks/useCart'
import { Button, Card, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';

import Typography from '@mui/material/Typography';
import useCheckout from '../hooks/useCheckout';
export default function Checkout() {
    
    const {data,isLoading,isError,error}= useCart ();
    const {mutate:checkout}= useCheckout();
    const[PaymentMethod,setPaymentMethod]=useState('');
    if(isLoading) return <CircularProgress/>
    if(isError) return <Box color={'red'}>{error}</Box>
  return (
    <Box sx={{ mt:8,minHeight: "100vh",bgcolor: "background.paper",py: { xs: 4, md: 7 },px: { xs: 2, md: 5 },  }}>

   
        <container maxWidth="xl">
               <Typography variant='h4' sx={{fontWeight: 900, color: "#14213d",fontSize: { xs: "2rem",md: "3rem",}, }} >Checkout</Typography>
               
<Grid container spacing={3}>
            <Grid item xs={12} md={8}>
                <Card sx={{boxShadow:3}}>
 <TableContainer>
  <Table>
    <TableHead>
       <TableCell sx={{color:"#00080e",fontWeight:"bold"}}>Product Name</TableCell>
       <TableCell sx={{color:"#00080e",fontWeight:"bold"}} >Price</TableCell>
        <TableCell sx={{color:"#00080e",fontWeight:"bold"}} >Quantity </TableCell>
         <TableCell sx={{color:"#00080e",fontWeight:"bold"}} >Total</TableCell>
    </TableHead>
    <TableBody>

      {data.items.map( (item)=> (
        
 <TableRow key={item.id} sx={{bgcolor:"#f5f7f8"}}>
           <TableCell >{item.productName}</TableCell>
            <TableCell>{item.price}$</TableCell>
             <TableCell>
<Box sx={{display:'flex', alignItems:'center', gap:1 }}>

  <Typography>{item.count}</Typography>
   
          </Box>
      
          
             </TableCell>
              <TableCell>{item.totalPrice}$</TableCell>
             
        </TableRow>
      ))}
     
       
    </TableBody>
  </Table>
</TableContainer>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label"sx={{fontWeight: 800,color: "#14213d",mb: 2, fontSize: "1.1rem", }} >Payment Method</InputLabel>
  
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={PaymentMethod}
    label="Age"
    onChange={(e)=>setPaymentMethod(e.target.value)}
    displayEmpty
                  sx={{borderRadius: 3,bgcolor: "#fafafa","& .MuiOutlinedInput-notchedOutline": {borderColor: "#e2e8f0",}, "&:hover .MuiOutlinedInput-notchedOutline": {borderColor: "#ff6b00",}, "&.Mui-focused .MuiOutlinedInput-notchedOutline": {borderColor: "#ff6b00",borderWidth: 2, },}}
  >
    <MenuItem value={'cash'}>Cash</MenuItem>
    <MenuItem value={'Visa'}>Visa</MenuItem>
    
  </Select>
</FormControl>
<Box sx={{gap:1,mt:3 , display:"flex"}}>
    <Button variant='contained' color='success'sx={{mt: 3,py: 1.5,borderRadius: 3, bgcolor: "#ff6b00", color: "#fafafa",fontSize: "1rem",fontWeight: 800,  textTransform: "none",boxShadow:"0 10px 25px rgba(255,107,0,0.25)","&:hover": {bgcolor: "#e85d00",boxShadow:"0 12px 28px rgba(255,107,0,0.30)", }, }} onClick={()=>checkout({PaymentMethod})}> Pay Now</Button>
</Box>

                </Card>

            </Grid>
        </Grid>
 
        </container>
        
</Box>
  )
}

