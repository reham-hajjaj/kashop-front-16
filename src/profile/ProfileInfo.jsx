import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react'
import useProfile from '../hooks/useProfie';

export default function ProfileInfo() {
     const {data, isLoading,isError,error} =  useProfile();
    if(isLoading)return<CircularProgress/>;
    if(isError) return<Typography color="error">{error.message} </Typography>
   console.log(data);
  return (
    <Box>
       
    </Box>
  )
}


