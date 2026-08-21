
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
import { Card, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
  <Box sx={{minHeight: "100vh", bgcolor: "#fafafa",py: { xs: 3, md: 6 }, px: { xs: 2, md: 5 },}}>
    <Container maxWidth="xl">
      <Box sx={{mb: 4,px: { xs: 2, md: 4 },   py:4, borderRadius: 4, background:"linear-gradient(135deg, #fff3e8 0%, #fffaf6 100%)", textAlign:"center" }} >
<Typography  sx={{ color: "#ff6b00",fontWeight: 700, mb: 0.5, }}>Your Items</Typography>
<Typography variant="h3"
          sx={{fontWeight: 800,color: "#14213d",  fontSize: { xs: "2rem", md: "3rem" },}} >Shoppin Cart</Typography>
          
          <Typography sx={{ color: "#64748b", mt: 1 }}>Review your items and continue to checkout</Typography>
      </Box>
<Grid container spacing={3}>
    <Grid item xs={12} md={4}>
      <Card elevation={0} sx={{height: "100%",minHeight: { md: 560 }, borderRadius: 4, background:"linear-gradient(145deg, #fffaf6, #fff0e5)", border: "1px solid #f3e3d7", display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",  p: 4, }} >
        <Box sx={{width: 100, height: 100,  borderRadius: 4,bgcolor: "#ff6b00",display: "flex",justifyContent: "center", alignItems: "center",mb: 4, boxShadow:"0 12px 30px rgba(255,107,0,0.25)", }}>
< ShoppingCartIcon sx={{fontSize: 55, color: "#fff",}}/>
        </Box>
        <Box sx={{width: { xs: 190, md: 240 }, height: { xs: 190, md: 240 }, borderRadius: "50%",bgcolor: "#fff",display: "flex", justifyContent: "center",alignItems: "center",mb: 4, }}>
          <ShoppingCartIcon sx={{fontSize: { xs: 110, md: 150 },color: "#ff6b00", }}/>
        </Box>
        <Typography variant="h4" sx={{fontWeight: 800, color: "#14213d",textAlign: "center",}}>Happy{""}</Typography>
              
    <Typography variant='h4'sx={{ color: "#ff6b00"}}>!Shopping </Typography>
    <Typography sx={{color: "#64748b",mt: 1, textAlign: "center",}} >Great deals are waiting for you.</Typography>
  </Card>
 </Grid>
 <Grid item xs={12} md={8} >
  <Card elevation={0} sx={{ borderRadius: 4, bgcolor: "#fff", border: "1px solid #edf0f4",  p: { xs: 2, md: 4 }, }} >
    <Box sx={{display: "flex", alignItems: "center",  gap: 2,  mb: 3, }} >
      <Box sx={{width: 60, height: 60, borderRadius: 3,  bgcolor: "#ff6b00", display: "flex", alignItems: "center", justifyContent: "center",}}>
<ShoppingCartIcon sx={{color: "#fff",fontSize: 32, }} />
      </Box>
      <Typography variant="h5" sx={{fontWeight: 800,color: "#14213d", }}>Your Cart</Typography>
    </Box>
<TableContainer>
  <Table>
    <TableHead>
       <TableCell sx={{color: "#14213d",fontWeight: 800, }} >Product Name</TableCell>
       <TableCell sx={{color: "#14213d",fontWeight: 800, }}  >Price</TableCell>
        <TableCell sx={{color: "#14213d",fontWeight: 800, }}  >Quantity</TableCell>
         <TableCell sx={{color: "#14213d",fontWeight: 800, }} >Total</TableCell>
    </TableHead>
    <TableBody>

      {data.items.map( (item)=> (
        
 <TableRow key={item.id} sx={{"&:hover": {bgcolor: "#fffaf6",},}} >
           <TableCell sx={{fontWeight: 700,color: "#14213d",}}>{item.productName}</TableCell>
            <TableCell sx={{fontWeight: 700,color: "#ff6b00",}}>{item.price}$</TableCell>
             <TableCell>
<Box sx={{display:'flex', alignItems:'center', gap:1 }}>
<IconButton size='small' sx={{bgcolor:"#f1f5f9",color:"#14213d","&:hover": {bgcolor: "#ffe9d8",color: "#ff6b00",  }, }} ><RemoveIcon onClick={()=>handleUpdate(item.productId,'-')}/></IconButton>
  <Typography sx={{color:"#14213d"}}>{item.count}</Typography>
    <IconButton siz='small'sx={{bgcolor:"#f1f5f9",color:"#14213d","&:hover": {bgcolor: "#ffe9d8",color: "#ff6b00",  },}}><AddIcon  onClick={()=>handleUpdate(item.productId,'+')}/></IconButton>
          </Box>
      
          
             </TableCell>
              <TableCell sx={{fontWeight: 700,color: "#14213d",}} >{item.totalPrice}$</TableCell>
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
  <Button  sx={{bgcolor: "#ff6b00",color: "#fff",px: 3,py: 1.2,borderRadius: 2.5,fontWeight: 800,textTransform: "none", boxShadow:"0 8px 20px rgba(255,107,0,0.25)","&:hover": { bgcolor: "#e85d00", }, }} variant='contained' onClick={()=>navigate(`/Checkout`)}>Process To Checkout</Button>
   <Button sx={{ borderColor: "#ff6b00", color: "#fff", px: 3, py: 1.2, borderRadius: 2.5,  fontWeight: 700, textTransform: "none", "&:hover": {   borderColor: "#ff6b00",    bgcolor: "#e85d00",   },  }}  variant='contained' onClick={()=>navigate(`/`)} >Continue Shopping</Button>
</Box>
<Typography variant='h6' sx={{mt:2}}>Cart Total: {data?. response?.cartTotal}</Typography>
  
    
  </Card>


 </Grid>

   
  </Grid>
 
    </Container>

  </Box>
   
 )
}
