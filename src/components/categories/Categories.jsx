import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { CircularProgress, Container, Typography } from '@mui/material';
import useCategories from '../../hooks/useCategories';
import Box from '@mui/material/Box';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default function Categories() {
 const { data, isError, isLoding , error }=useCategories();
 console.log(data?.response?.data)
  if(isLoding)return<CircularProgress/>;
  if(isError) return<Typography color='red'>{error} </Typography>
  return (
    <Container sx={{mt:3}}>

      <Typography variant='h4' sx={{color: "#0097a7"}}  sx={{mb:2}} >Categories</Typography>
      <Grid Container spacing={2}>
        {data?.response?.data?.map((category)=>{
        <Grid item size={{ xs: 12, sm:6, md: 4}} key={category.id} >
          <Card sx={{bgcolor: "#E3F2FD"}}>
<CardContent>
<Typography variant='h4' align='center'>{category.name}</Typography>
</CardContent>
          </Card >
        </Grid>
    return <h4 key={category.id}>{category.name}</h4>

   })}
      </Grid>
  
    </Container>
  )
}


