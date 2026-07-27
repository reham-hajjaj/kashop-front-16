import React, { useState } from 'react'
import useCart from '../hooks/useCart'
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';

import Typography from '@mui/material/Typography';
export default function Checkout() {
    
    const {data,isLoading,isError,error}= useCart ();
    const[PaymentMethod,setPaymentMethod]=useState('');
    if(isLoading) return <CircularProgress/>
    if(isError) return <Box color={'red'}>{error}</Box>
  return (
    <Box>
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
        
 <TableRow key={item.id} sx={{bgcolor:"#1976d2"}}>
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
</Box>
  )
}

