import React, { useState } from 'react'
import useCart from '../hooks/useCart'
import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
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
    <Box sx={{mt:12,px:3,}}>
        <Typography variant='h4'sx={{fontWeight:""}}>Checkout</Typography>
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
  <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={PaymentMethod}
    label="Age"
    onChange={(e)=>setPaymentMethod(e.target.value)}
  >
    <MenuItem value={'cash'}>Cash</MenuItem>
    <MenuItem value={'Visa'}>Visa</MenuItem>
    
  </Select>
</FormControl>
<Button variant='contained' color='success' onClick={()=>checkout({PaymentMethod})}> Pay Now</Button>
</Box>
  )
}

