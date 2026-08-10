import React, { useState } from 'react'
import useProduct from '../../hooks/useProduct';
import {useParams} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useAddToCart from '../../hooks/useAddToCart.jsx';
import { Rating, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import useAddReview from '../../hooks/useAddReview.jsx';
export default function ProductDetails() {
  const {mutate:addReview,isPending,isSuccess} =useAddReview();
  const[rating,setRating]=useState(0);
  const[comment,setComment]=useState("");
  onSuccess:()=>{setRating(0);
    setComment("");
  }
const handleAddReview=()=>{addReview({productId:product.ID, Rating:rating,Comment:comment})}
    const {id} = useParams();
    const {mutate:addToCart} = useAddToCart();
    const {data,isError,isLoading,error} = useProduct(id);

    if(isLoading) return <CircularProgress/>
    console.log(data);
    
  return (
    <Container maxWidth="lg" sx={{mt:5}}>
      <Card sx={{p:4, borderRadius:4, boxShadow:5}}>
        <Grid item xs={12} md={6}>

           <Typography variant='h5' color='text.secondary' sx={{my:2}}>{data.response.name}</Typography>
        <Typography variant='body1' color='text.secondary' >{data.response.description}</Typography>
<Button onClick={()=> { console.log('Button clicked'); addToCart({ ProductId:data.response.id,count: 1})}} variant='contained'  full Width size="large"  sx={{mt:3,py:1.5, borderRadius:3,bgcolor:"#1976D2", textTransform:"none" ,fontSize:"16px"}} >

  Add to Cart
</Button>


        </Grid>
       
      </Card>
        <Card sx={{p:4, borderRadius:3,boxShadow:3 , Width:350,mx:"auto"}}>

          <Typography variant='h5' sx={{mb:2}}>Add Your Review</Typography>
          <Typography sx={{mb:1}}>Rating</Typography>
          <Rating
  value={rating}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  size="large"
/>
<TextField fullWidth multiline row={3} label="your Review" value={comment} onChange={(event)=>{setComment(event.target.value)}} sx={{mt:2}}>
  
</TextField>
<Button variant='contained'fullWidth sx={{mt:2}} on onClick={handleAddReview} disabled={isPending,rating===0,comment.trim===("")  }> {isPending?"Adding...":"Add Review"}</Button>
<Typography sx={{mt:1}} color="success.min">!Review added successfully</Typography>
        
        </Card>
        
       
    </Container>
  )
}


