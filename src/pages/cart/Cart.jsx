
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
import Grid from '@mui/material/Grid';
import { Navigate, useNavigate } from 'react-router-dom';
import useClearCart from '../../hooks/useClearCart.jsx';
export default function Cart() {
const navigate =useNavigate();
 const {data, isLoading,isError,error} = useCart();
 const{mutate:removeItem,ispending}=useRemovefromCart();
  const{mutate:updateItem,ispending:updateItemPending}=useUpdateCartItem();
  const{mutate:ClearItem}= useClearCart();
 if(isLoading) return <CircularProgress/>
 if (isError) return <Typography color="error"> {error.message}</Typography>
 const handleUpdate =(productId,action)=>{
  const item= data.items.find(i=>i.productId== productId);
  if(action=='+'){
    updateItem({productId,count:item.count+1})

  }else{
    if(item.count==1)return;
    updateItem({productId,count:item.count-1 })
  }

 }
 console.log(data);

 return(
  <Grid container spacing={3} sx={{pt:8,px:3}}>
    <Grid item xs={12} md={8}>
       <Box sx={{minHeight:"100vh",bgcolor:"#f5f5f5",py:5, pt:10,px:{xs:2,md:5}}} component ="section">
    <Typography variant='h4'sx={{fontWeight:"bold",mb:3,color:"red"}}>Shopping Cart</Typography>
    
<TableContainer>
  <Table>
    <TableHead>
       <TableCell sx={{color:"#000",fontWeight:"bold"}}>Product Name</TableCell>
       <TableCell sx={{color:"#000",fontWeight:"bold"}} >Price</TableCell>
        <TableCell sx={{color:"#000",fontWeight:"bold"}} >Quantity</TableCell>
         <TableCell sx={{color:"#000",fontWeight:"bold"}} >Total</TableCell>
    </TableHead>
    <TableBody>

      {data.items.map( (item)=> (
        
 <TableRow key={item.id} sx={{bgcolor:"#1976d2"}}>
           <TableCell >{item.productName}</TableCell>
            <TableCell>{item.price}$</TableCell>
             <TableCell>
<Box sx={{display:'flex', alignItems:'center', gap:1 }}>
<IconButton siz='small' sx={{bgcolor:"#eee",color:"#fff" }} ><RemoveIcon onClick={()=>handleUpdate(item.productId,'-')}/></IconButton>
  <Typography>{item.count}</Typography>
    <IconButton siz='small'sx={{bgcolor:"#eee",color:"#fff"}}><AddIcon  onClick={()=>handleUpdate(item.productId,'+')}/></IconButton>
          </Box>
      
          
             </TableCell>
              <TableCell>{item.totalPrice}$</TableCell>
               <TableCell><Button color='error'
               disabled={ispending}
               onClick={()=>removeItem(item.productId)}>Remove</Button></TableCell>
<TableCell>
  <Button color='error'
               disabled={ispending}
               onClick={()=>ClearItem(item.productId)}>Clear</Button>
</TableCell>
        </TableRow>
      ))}
     
       
    </TableBody>
  </Table>
</TableContainer>
<Box  sx={{display:"flex", gap:2, alignItems:"center", justifyContent:"center", color:"white"}}>
  <Button  sx={{bgcolor:"#ff9800",color:"#fff"}} variant='contained' onClick={()=>navigate(`/Checkout`)}>Process To Checkout</Button>
   <Button sx={{bgcolor:"#f57c00"}} variant='contained' onClick={()=>navigate(`/`)} >Continue Shopping</Button>
</Box>
<Typography variant='h6' sx={{mt:2}}>Cart Total: {data?. response?.cartTotal}</Typography>
  </Box>
    </Grid>
  </Grid>
  
 )
}
