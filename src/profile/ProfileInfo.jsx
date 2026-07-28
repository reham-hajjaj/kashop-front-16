import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react'
import useProfile from '../hooks/useProfie';

export default function ProfileInfo() {
     const {data, isLoading, isError, error} =  useProfile();
console.log(data);
console.log(error);
    if(isLoading)return<CircularProgress/>;
    if(isError) return<Typography color="error">{error.message} </Typography>
   
  return (
    <Box>
       
    </Box>
  )
}


