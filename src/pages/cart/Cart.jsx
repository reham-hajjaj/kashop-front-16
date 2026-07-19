
import axios from 'axios'
import useCart from '../../hooks/useCart.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React,  { useEffect } from 'react'
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
export default function Cart() {

 const {data, isLoading, isError,error} = useCart()
 if(isLoading) return <CircularProgress/>
 if (isError) return <Typography>{error}</Typography>
 console.log(data);

 return(
  <Box component ="section">
    <Typography>Cart</Typography>
<TableContainer>
  <Table>
    <TableHead>
      <TableCell> Product Name</TableCell>
       <TableCell> Price</TableCell>
        <TableCell> Quantity</TableCell>
         <TableCell> Total</TableCell>
    </TableHead>
    <TableBody>
      {data?.items?.map( (item)=> (
 <TableRow Key={item.id}>
           <TableCell>{item.ProductName}</TableCell>
            <TableCell>{item.price}$</TableCell>
             <TableCell>{item.count}</TableCell>
              <TableCell>{item.totalPrice}$</TableCell>
        </TableRow>
      ))}
     
       
    </TableBody>
  </Table>
</TableContainer>
  </Box>
 )
}
