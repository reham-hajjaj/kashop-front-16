
import axios from 'axios'
import useCart from '../../hooks/useCart.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import useRemovefromCart from '../../hooks/useRemovefromCart.jsx';
import useUpdateCartItem from '../../hooks/useUpdateCartItem.jsx';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
export default function Cart() {

 const {data, isLoading,isError,error} = useCart();
 const{mutate:removeItem,ispending}=useRemovefromCart();
  const{mutate:updateItem,ispending:updateItemPending}=useUpdateCartItem();
 if(isLoading) return <CircularProgress/>
 if (isError) return <Typography color="error"> {error.message}</Typography>
 const handleUpdate =(productId,action)=>{
  const item= data.items.find(i=>i.productId== productId);
  if(action=='+'){
    updateItem({productId,count:item.count+1})

  }else{
    updateItem({productId,count:item.count-1 })
  }

 }
 console.log(data);

 return(
  <Box component ="section">
    <Typography variant='h4'>Cart</Typography>
<TableContainer>
  <Table>
    <TableHead>
       <TableCell>Product Name</TableCell>
       <TableCell>Price</TableCell>
        <TableCell>count </TableCell>
         <TableCell>Total</TableCell>
    </TableHead>
    <TableBody>

      {data.items.map( (item)=> (
        
 <TableRow key={item.id}>
           <TableCell>{item.productName}</TableCell>
            <TableCell>{item.price}$</TableCell>
             <TableCell>
<Box sx={{display:'flex', alignItems:'center'}}>
<IconButton siz='small'><RemoveIcon onClick={()=>handleUpdate(item.productId,'-')}/></IconButton>
  <Typography>{item.count}</Typography>
    <IconButton siz='small'><AddIcon  onClick={()=>handleUpdate(item.productId,'+')}/></IconButton>
          </Box>
      
          
             </TableCell>
              <TableCell>{item.totalPrice}$</TableCell>
               <TableCell><Button color='error'
               disabled={ispending}
               onClick={()=>removeItem(item.productId)}>Remove</Button></TableCell>
        </TableRow>
      ))}
     
       
    </TableBody>
  </Table>
</TableContainer>
<Typography variant='h6' sx={{mt:2}}>Cart Total: {data?. response?.cartTotal}</Typography>
  </Box>
 )
}
