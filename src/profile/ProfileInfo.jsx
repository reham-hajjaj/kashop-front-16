
import React from 'react'
import useProfile from '../hooks/useProfie';
import { Box, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
import authAxiosInstance from '../api/authAxiosInstance';
import useAuthStore from '../store/useAuthStore';

export default function ProfileInfo() {
     const {data, isLoading, isError,error} =  useProfile();
    if(isLoading) return <CircularProgress/>
    if(isError) return <Typography color="error">{error?.message}</Typography>
    
   console.log(data);
  return (
    <Grid item xs={12} md={5} >
      <Card sx={{borderRadius:3, boxShadow:3}}>
        <CardContent>
 <Typography variant='h5'mb={2}>Name:{data?.fullName}</Typography>
         <Typography>Email:{data?.email}</Typography>
         <Typography>phone:{data?.phoneNumber}</Typography>
          <Typography>City:{data.city}</Typography>
        </CardContent>
      </Card>  
    </Grid>
    
  
    
  );
}


