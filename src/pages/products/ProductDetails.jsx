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
  
  const {mutate: addReview,isPending, isSuccess} =useAddReview();
  const[rating,setRating]=useState(0);
  
  const[comment,setComment]=useState("");
const handleAddReview = () => {
  console.log("ADD REVIEW CLICKED");

  addReview(
    {
      ProductId: data.response.id,
      Rating: rating,
      Comment: comment,
    },
    {
     onSuccess: () => {
  setReviews((prev) => [
    ...prev,
    {
      rating: rating,
      comment: comment,
    },
  ]);

  setRating(0);
  setComment("");
}, 
    }
  );
};
    const {id} = useParams();
    const {mutate:addToCart} = useAddToCart();
    const {data,isError,isLoading,error} = useProduct(id);
 const[quantity,setQuantity]=useState(1);
    if(isLoading){return (
      <Box sx={{textAlign:"center",py:10}}><Typography>Loading</Typography></Box>
    );

    } 
    const product =data?.data;
    const handleAddToCart =()=>{
      addToCart({productId:id,count:quantity});
    };  
    console.log(data);
    
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f6f7fb",py: { xs: 3, md: 6 },}}>
    <Container maxWidth="xl">
      
      <Card  elevation={0}  sx={{borderRadius: 5,overflow: "hidden",border: "1px solid",   borderColor: "divider",   backgroundColor: "background.paper",boxShadow: "0 10px 35px rgba(0,0,0,0.08)", }}>
        <Grid container>

        <Grid item xs={12} md={5} sx={{ p: { xs: 3, md: 6 },display: "flex",flexDirection: "column",  justifyContent: "center", }}>

           <Typography variant='h5' color='text.secondary' sx={{my:2}}>{data.response.name}</Typography>
        <Typography variant='body1' color='text.secondary' >{data.response.description}</Typography>
<Button onClick={()=> {console.log('Button clicked'); addToCart({ ProductId:data.response.id,count: 1})}} variant='contained'  fullWidth size="large"  sx={{ width: "200px",  height: "46px",borderRadius: 3, fontSize: "15px",fontWeight: 700,textTransform: "none",}} >

  Add to Cart
</Button>


        </Grid>
       
        </Grid>
      </Card>
      
        <Card sx={{ mt:3,p:2, borderRadius:3,boxShadow:3 , width:"350px"}}>

          <Typography variant='h6'>Add Your Review</Typography>
          <Typography variant='body2' sx={{mt:1}}>Rating</Typography>
          <Rating
  value={rating}
  onChange={(event, newValue) => {
    setRating(newValue);
  }}
  size="large"
/>
<TextField fullWidth multiline rows={3} label="your Review" value={comment} onChange={(event)=>{setComment(event.target.value)}} sx={{mt:1.5}}>
  
</TextField>
<Button
  variant="contained" fullWidth sx={{ mt: 1.5 }}onClick={handleAddReview}disabled={isPending || rating === 0 || comment.trim() === ""}>  {isPending ? "Adding..." : "Add Review"}</Button>{isSuccess && (
  <Typography sx={{ mt: 1 }} color="success.main">
    Review added successfully!
  </Typography>
)}

        
        </Card>
        <Box sx={{ mt: 4 }}>
  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
    Customer Reviews
  </Typography>

  <Grid container spacing={2}>
    {data?.response?.reviews?.map((review, index) => (
      <Grid item xs={12} md={6} key={index}>
        <Card
          sx={{
            p: 2.5,
            mb:2,
            height: "100%",
          }}
        >
          <Typography fontWeight="bold">
            {review.userName}
          </Typography>

          <Rating
            value={review.rating}
            readOnly
            size="small"
            sx={{ mt: 0.5 }}
          />

          <Typography
            sx={{
              mt: 1,
              color: "text.secondary",
            }}
          >
            {review.comment}
          </Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>
       
      
    </Container>
    </Box>

  )
}


